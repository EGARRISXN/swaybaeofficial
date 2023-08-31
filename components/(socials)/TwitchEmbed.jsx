"use client";
import { useEffect } from "react";

export default function TwitchEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.twitch.tv/js/embed/v1.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        width: "100%",
        height: "100%",
        channel: "sway_bae",
        parent: "swaybae.net",
      };

      const player = new window.Twitch.Player("TwitchPlayerDivID", options);
      player.setVolume(0.5);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="aspect-h-9 aspect-w-16 border-[6px] border-info border-2xl shadow-2xl shadow-purple-800/50">
      <div id="TwitchPlayerDivID"></div>
    </div>
  );
}
