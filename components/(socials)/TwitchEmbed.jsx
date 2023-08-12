"use client";
import React, { useEffect } from "react";

export default function TwitchEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.twitch.tv/js/embed/v1.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        width: 400, // width of video player
        height: 300, // height of video player
        channel: "sway_bae",
        parent: "swaybaeofficial.vercel.app",
      };

      const player = new window.Twitch.Player("TwitchPlayerDivID", options);
      player.setVolume(0.5);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="TwitchPlayerDivID"></div>;
}
