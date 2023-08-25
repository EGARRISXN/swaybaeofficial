export default function SpotifyEmbed() {
  return (
    <div className="rounded-2xl shadow-2xl shadow-purple-800/50">
      <iframe
        className="spotify-embed"
        title="Spotify playlist by Sway Bae"
        src="https://open.spotify.com/embed/playlist/6K7rloMcvdsbIpFzs0QGmp?utm_source=generator&theme=0"
        allowtransparency="true"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{
          width: 345,
          height: 80,
        }}
      ></iframe>
    </div>
  );
}
