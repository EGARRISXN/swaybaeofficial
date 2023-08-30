"use client";
import Image from "next/image";
import YouTubeHeader from "../../public/images/youtubeheader.svg";
import YouTubeEmbed from "./YouTubeEmbed";

export default function YoutubeCarousel() {
  return (
    <div className="border-[10px] border-base-content rounded-2xl shadow-2xl shadow-purple-800/50 items-center">
      <Image
        src={YouTubeHeader}
        quality={100}
        alt="Merch"
        width="100%"
        height="100%"
        className="w-full rounded-t-md  bg-black"
      />
      <div className="grid grid-row-2 lg:grid-cols-2 p-4 gap-8 rounded-b-md">
        <div className="x">
          <YouTubeEmbed vnum={0} />
        </div>
        <div className="x">
          <YouTubeEmbed vnum={1} />
        </div>
        <div className="x">
          <YouTubeEmbed vnum={2} />
        </div>
        <div className="x">
          <YouTubeEmbed vnum={3} />
        </div>
      </div>
    </div>
  );
}
