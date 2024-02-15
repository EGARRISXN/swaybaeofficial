export default function SpotifyEmbed() {
  return (
    <div className='mx-8 flex rounded-3xl border-4 bg-base-100 p-2 shadow-lg shadow-purple-800/50 md:mx-auto md:w-full'>
      <iframe
        className='rounded-2xl'
        title='Spotify playlist by Sway Bae'
        src='https://open.spotify.com/embed/playlist/1O1V3UK6rqXvaC3FYvOpJw?utm_source=generator&theme=0'
        loading='lazy'
        allow='accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        style={{
          width: '100%',
          height: 80,
        }}
      ></iframe>
    </div>
  )
}
