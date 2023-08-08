"use client";
import { useEffect } from "react";

export default function TikTokEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-base-200 rounded-lg shadow-xl pl-3 pr-3 pt-5 pb-5 shadow-purple-500/50">
      <blockquote
        className="tiktok-embed rounded-sm"
        title="@sway_baetv on TikTok"
        cite="https://www.tiktok.com/@sway_baetv"
        data-unique-id="sway_baetv"
        data-embed-type="creator"
        justify-content="center"
        style={{
          width: 325,
          height: 365,
        }}
      >
        <section>
          <a
            target="_blank"
            href="https://www.tiktok.com/@sway_baetv?refer=creator_embed"
            className="text-blue-500 underline"
          >
            @sway_baetv
          </a>
        </section>
      </blockquote>
    </div>
  );
}
