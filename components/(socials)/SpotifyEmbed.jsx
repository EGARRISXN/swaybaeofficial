export default function SpotifyEmbed() {
  return (
    <div className="rounded-2xl">
      <iframe
        className="rounded-2xl"
        title="Spotify playlist by Sway Bae"
        src="https://open.spotify.com/embed/playlist/1O1V3UK6rqXvaC3FYvOpJw?utm_source=generator&theme=0"
        allow="encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{
          width: "100%",
          height: 80,
        }}
      ></iframe>
    </div>
  );
}
