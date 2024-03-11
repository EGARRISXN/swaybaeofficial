const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN

const basic = btoa(`${client_id}:${client_secret}`)
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })
  return response.json()
}

export const getNowPlaying = async () => {
  const {access_token} = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export default async function getNowPlayingItem(client_id, client_secret, refresh_token) {
  try {
    const nowPlayingResponse = await getNowPlaying()

    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
      return {
        isPlaying: false,
        albumImageUrl: '',
        artist: '',
        songUrl: '',
        title: '',
      }
    }

    const nowPlayingData = await nowPlayingResponse.json()

    const song = nowPlayingData.item
    const albumImageUrl = song.album.images[0].url
    const artist = song.artists.map((_artist) => _artist.name).join(', ')
    const isPlaying = nowPlayingData.is_playing
    const songUrl = song.external_urls.spotify
    const title = song.name

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    }
  } catch (error) {
    console.error('Error fetching now playing item:', error)
    return {
      isPlaying: false,
      albumImageUrl: '',
      artist: '',
      songUrl: '',
      title: '',
    }
  }
}

// https://accounts.spotify.com/authorize?client_id=fb1511b14c47418099850ca034a5d753&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20user-top-read

// {
//   "access_token":  "BQCQaweB_iHKrQIVwvH_FTDbaCGUBff6xLt-4Uw5Tb8kFApMQeCCkX1UDw4m4XGaWDGhtmQDW48yxvKKBTGO_1ZdxwREdhLT1pxk6IzC4t7KiFEZOkscrY62Ni6VKXBCoe0RFFyjN2-KBCNHug926hSeVsl62V_GkZp3VpI1PcPWTek-oVNElu4FVBk",
//   "token_type": "Bearer",
//   "expires_in": 3600,
//   "refresh_token": "AQB_9imOggXyH9l2UkxIhacKJzS_Su5C9U8cSrFQzYl4QluUs3qe4gRO40DxWHx7BhMY4iRY1SOZq-_kLpOLAZV_ZxVeIsZvQKohwq-PDi1Apiem6rxbe2ncX4ds8TN1q3A",
//   "scope": "user-read-currently-playing user-top-read"
// }

// curl -H "Authorization: Basic <base64 encoded fb1511b14c47418099850ca034a5d753:48363ed494cf41e3841810772d39b9b8>" -d grant_type=authorization_code -d code=<AQCfqVObotKLTYruLyWX8kqNsHOI4Q2W0yrXyegEhYWlrxoBxESoynEtwen6QMqwiLfkY0re_gTiS-AOm2at-oGf5hzAqcM8Ph-tvUPxIB34tH7JLDv_eerZy2iRcZMATzgdf1I5P0dB7iuYtcyU0ApQ_r7X4hoYh70vhtH-ybzpQIugVynWuCdcLXhDOSStV_0NjW9p0Jp_FuxjhlEZaPgfJsXo> -d redirect_uri=http%3A
// %2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
