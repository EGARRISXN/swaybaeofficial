export default function SpotifyEmbed() {
  return (
    <div className="card bg-base-200 p-3 w-full shadow-xl shadow-purple-500/50 ">
      <iframe
        className="spotify-embed rounded-2xl"
        title="Spotify playlist by Sway Bae"
        src="https://open.spotify.com/embed/playlist/6K7rloMcvdsbIpFzs0QGmp?utm_source=generator&theme=0"
        allowtransparency="true"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{
          width: 345,
          height: 152,
        }}
      ></iframe>
    </div>
  );
}
