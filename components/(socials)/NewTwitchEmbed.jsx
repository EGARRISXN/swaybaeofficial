export default function NewTwitchEmbed() {
    return (
        <div className="aspect-h-9 aspect-w-16 border-[10px] border-info bg-info border-2xl shadow-2xl rounded-2xl shadow-purple-800/50">
        <iframe
            src="https://player.twitch.tv/?channel=sway_bae&parent=swaybae.net&autoplay=false"
            height="100%"
            width="100%"
            allowfullscreen
            >
        </iframe>
        </div>
    )
}