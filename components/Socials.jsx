"use client";
import SpotifyEmbed from "../components/(socials)/SpotifyEmbed";
import SocialCarousel from "../components/(socials)/SocialCarousel";
import GoogleCalendarEmbed from "../components/(socials)/GoogleCalendarEmbed";
import TwitchEmbed from "../components/(socials)/TwitchEmbed";
import YoutubeEmbed from "../components/(socials)/YouTubeEmbed";

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
        <div className="mx-auto xs:px-2 sm:px-6 md:px-12 lg:px-16">
          <SocialCarousel />

          <br />
          <div className="grid grid-col lg:grid-cols-2 mx-auto lg:space-x-8 mt-6 sm:mt-10">
            <div>
              <p className="text-center font-semibold text-accent bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text text-transparent">
                Latest Youtube Video
              </p>
              <div className=" shadow-xl shadow-purple-800/50">
                <YoutubeEmbed vnum={0} />
              </div>
            </div>
            <div>
              <p className="hidden lg:block text-center font-semibold mt-[10px] text-accent bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text text-transparent">
                Live Twitch Stream
              </p>
              <div className="hidden lg:block shadow-xl mb-[10px] shadow-purple-800/50">
                <TwitchEmbed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
