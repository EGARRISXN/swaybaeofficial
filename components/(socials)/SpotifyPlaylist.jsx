const SpotifyPlaylist = () => {
  return (
    <div className='mx-auto mt-8 max-w-screen-md'>
      <iframe
        className='h-80 w-full rounded-md'
        title='Spotify Embed: The New Releases!'
        allowFullScreen
        allow='clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
        src='https://open.spotify.com/embed/playlist/5kGjyjJYrOVrfiDe4I100h?utm_source=oembed'
      ></iframe>
    </div>
  )
}

export default SpotifyPlaylist
