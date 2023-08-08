export default function DiscordEmbed() {
  return (
    <div className="card bg-base-200 p-3 w-full shadow-xl shadow-purple-500/50 ">
      <iframe
        className="discord-embed rounded-md"
        src="https://discord.com/widget?id=530445935767978016&theme=dark"
        allowFullScreen="true"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        loading="lazy"
        style={{
          width: 345,
          height: 330,
        }}
      ></iframe>
    </div>
  );
}
