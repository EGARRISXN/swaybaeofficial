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
    <div className="card bg-base-200 px-3 pt-3 pb-1 w-full shadow-xl shadow-purple-500/50">
      <blockquote
        className="tiktok-embed rounded-2xl"
        title="@sway_baetv on TikTok"
        cite="https://www.tiktok.com/@sway_baetv"
        data-unique-id="sway_baetv"
        data-embed-type="creator"
        justify-content="center"
        style={{
          width: 345,
          height: 375,
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
