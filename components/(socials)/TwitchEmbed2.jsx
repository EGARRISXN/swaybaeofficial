"use client";
import React, { useEffect } from "react";

export default function TwitchEmbed2() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.twitch.tv/js/embed/v1.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        width: 854,
        height: 480,
        channel: "sway_bae",
        parent: "locahost",
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
