"use client";
import Link from "next/link";
import SpotifyEmbed from "../components/(socials)/SpotifyEmbed";
import SocialCarousel from "../components/(socials)/SocialCarousel";
import TwitchEmbed from "../components/(socials)/TwitchEmbed";
import YoutubeEmbed from "../components/(socials)/YouTubeEmbed";
import { FiTwitch, FiYoutube } from "react-icons/fi";

export default function Socials() {
  return (
    <div id="socials" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex flex-col sm:flex-row px-2 sm:px-6 md:pl-16 md:pr-16 justify-between mt-2">
          <h1 className="font-poppins uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Socials
          </h1>
          <div className="mt-16 sm:mt-0">
            <SpotifyEmbed />
          </div>
        </div>
        <br />
        <div className="mx-auto px-2 sm:px-6 md:px-12 lg:px-16">
          <SocialCarousel />

          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8">
            <div className="flex justify-center md:text-3xl items-center text-center text-accent bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text text-transparent">
              Latest
              <Link
                target="_blank"
                href="https://www.youtube.com/sway_baetv/"
                className="mx-2 text-primary underline hover:font-bold hover:text-warning"
              >
                YoutTube
              </Link>
              Video |
              <span className="text-base-content ml-2">
                <FiYoutube />
              </span>
            </div>
            <div className="shadow-lg rounded-xl p-4 shadow-purple-800/50">
              <YoutubeEmbed vnum={0} />
            </div>
          </div>

          <br />

          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 p-4 md:p-8">
            <div className="shadow-lg rounded-xl p-4 shadow-purple-800/50">
              <TwitchEmbed />
            </div>
            <div className="flex text-3xl justify-center items-center text-center text-accent bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text text-transparent">
              <span className="text-base-content mr-1">
                <FiTwitch />
              </span>
              | Live
              <Link
                className="mx-2 text-primary underline hover:font-bold hover:text-warning"
                target="_blank"
                href="https://www.twitch.tv/sway_bae/"
              >
                Twitch
              </Link>
              Stream
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
