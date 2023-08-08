export default function DiscordEmbed() {
  return (
    <div className="bg-base-200 p-1 rounded-2xl shadow-2xl shadow-purple-500/50 ">
      <iframe
        className="rounded-xl"
        src="https://discord.com/widget?id=530445935767978016&theme=dark"
        allowFullScreen="true"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        loading="lazy"
        style={{
          width: 345,
          height: 365,
        }}
      ></iframe>
    </div>
  );
}
