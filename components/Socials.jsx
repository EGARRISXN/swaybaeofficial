"use client";
import SpotifyEmbed from "../components/(socials)/SpotifyEmbed";

import SocialCarousel from "../components/(socials)/SocialCarousel";
import GoogleCalendarEmbed from "../components/(socials)/GoogleCalendarEmbed";
import TwitchEmbed from "../components/(socials)/TwitchEmbed";
import YoutubeContainer from "../components/(socials)/YouTubeContainer";
import TikTokEmbed from "../components/(socials)/TikTokEmbed";
// import { motion } from "framer-motion";

export default function Socials() {
  return (
    <div id="socials" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between mt-2">
          <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Socials
          </p>
          <div className="mt-16 sm:mt-0 rounded-xl shadow-xl shadow-purple-800/50">
            <SpotifyEmbed />
          </div>
        </div>

        <br />

        <div className="mx-auto xs:mt-0 sm:mt-6 space-y-4 xs:px-2 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-8 3xl:px-8">
          <div className="x">
            <SocialCarousel />
          </div>

          <br />

          <div className="grid grid-row-2 lg:grid-cols-2 gap-8 mx-auto">
            <div className="rounded-2xl shadow-2xl shadow-purple-800/50">
              <GoogleCalendarEmbed />
            </div>

            <div className="rounded-2xl shadow-2xl shadow-purple-800/50">
              <TwitchEmbed />
            </div>
          </div>

          <br />

          <div className="rounded-2xl shadow-2xl shadow-purple-800/50">
            <YoutubeContainer />
          </div>

          {/* <div className="grid grid-cols-1  sm:grid-cols-2">
            <div className="grid-1 ">
              <YoutubeContainer />
            </div>

            <div className="grid-1">
              <TikTokEmbed />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
