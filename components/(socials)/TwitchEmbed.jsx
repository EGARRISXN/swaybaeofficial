import Image from "next/image";
import TwitchHeader from "../../public/images/twitchheader.svg";

export default function TwitchEmbed() {
  return (
    <div className="aspect-w-16 aspect-h-9 rounded-2xl border-[10px] border-base-content shadow-2xl shadow-purple-800/50">
      <iframe
        src="https://player.twitch.tv/?sway_bae&parent=swaybae.net&muted=true"
        allowFullScreen="true"
        height="100%"
        width="100%"
        className="rounded-xl"
      ></iframe>
    </div>
  );
}

// "use client";
// import { useEffect } from "react";

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://player.twitch.tv/js/embed/v1.js";
//     script.async = true;

//     document.body.appendChild(script);

//     script.onload = () => {
//       const options = {
//         width: 400, // width of video player
//         height: 300, // height of video player
//         channel: "sway_bae",
//         parent: "swaybae.net",
//       };

//       const player = new window.Twitch.Player("TwitchPlayerDivID", options);
//       player.setVolume(0.5);
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return <div id="TwitchPlayerDivID"></div>;
// }
