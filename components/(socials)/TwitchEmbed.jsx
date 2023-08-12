export default function TwitchEmbed() {
  return (
    <div className="twitch-video card bg-base-200 p-3 w-full shadow-xl shadow-purple-800/50 ">
      <iframe
        src="https://player.twitch.tv/?channel=sway_bae&parent=https://swaybaeofficial.vercel.app/"
        frameborder="0"
        allowfullscreen="true"
        height="100%"
        width="100%"
      ></iframe>
    </div>
  );
}
