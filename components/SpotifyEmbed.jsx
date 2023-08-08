export default function SpotifyEmbed() {
  return (
    <div className="spotify-container bg-base-200 p-1 rounded-2xl shadow-2xl shadow-purple-500/50 ">
      <iframe
        className="spotify rounded-2xl"
        title="Spotify playlist by Sway Bae"
        src="https://open.spotify.com/embed/playlist/6K7rloMcvdsbIpFzs0QGmp?utm_source=generator&theme=0"
        allowtransparency="true"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{
          width: 345,
          height: 365,
        }}
      ></iframe>
    </div>
  );
}
