import GoogleCalendarEmbed from "../components/(socials)/GoogleCalendarEmbed";
import SocialCarousel from "../components/(socials)/SocialCarousel";
import YouTubeCarousel2 from "../components/(socials)/YouTubeCarousel2";
import YouTubeCarousel3 from "../components/(socials)/YouTubeCarousel3";
import SpotifyEmbed from "../components/(socials)/SpotifyEmbed";

export default function Socials() {
  return (
    <div id="socials" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 justify-center items-center py-16">
        <div className="container mx-auto flex">
          <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Socials
          </p>
        </div>
        <br />
        <div className="justify-center mx-auto items-center mt-16 xs:px-0 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-8 3xl:px-8 space-y-4">
          <div className="flex flex-col md:flex-row mx-auto justify-center items-center space-y-10 md:space-y-0 space-x-0 lg:space-x-10">
            <div className="space-y-10 flex flex-col mx-auto justify-center items-center">
              <div className="x">
                <SpotifyEmbed />
              </div>
              <div className="x">
                <GoogleCalendarEmbed />
              </div>
            </div>
            <div className="flex xl:hidden items-center justify-center mx-auto shadow-purple-800/50">
              <YouTubeCarousel3 />
            </div>
            <div className="hidden xl:flex items-center justify-center mx-auto shadow-purple-800/50">
              <YouTubeCarousel2 />
            </div>
          </div>
          <br />
          <div className="bg-base-200 border-[8px] rounded-3xl shadow-xl border-base-content shadow-purple-800/50">
            <SocialCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
