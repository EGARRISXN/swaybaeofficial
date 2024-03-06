export default function SpotifyEmbed() {
  return (
    <div className='mx-2 flex rounded-2xl border-2 p-1 shadow-lg shadow-purple-800/50 sm:mx-8 md:mx-auto md:w-full'>
      <label className='sr-only'>Spotify playlist by Sway Bae</label>
      <iframe
        className='rounded-xl'
        title='Spotify playlist by Sway Bae'
        src='https://open.spotify.com/embed/playlist/1O1V3UK6rqXvaC3FYvOpJw?utm_source=generator&theme=0'
        loading='lazy'
        allow='accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope'
        style={{
          width: '100%',
          height: 80,
        }}
      ></iframe>
    </div>
  )
}
