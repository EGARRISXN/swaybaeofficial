export default function SpotifyEmbed() {
  return (
    <div className='mx-8 flex rounded-3xl p-2 shadow-md md:mx-auto md:w-full'>
      <iframe
        className='rounded-2xl'
        title='Spotify playlist by Sway Bae'
        src='https://open.spotify.com/embed/playlist/1O1V3UK6rqXvaC3FYvOpJw?utm_source=generator&theme=0'
        allow='encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
        style={{
          width: '100%',
          height: 80,
        }}
      ></iframe>
    </div>
  )
}
