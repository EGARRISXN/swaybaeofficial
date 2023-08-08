import { YouTubeCarousel } from "../../components/YouTubeCarousel";
import { YouTubeCarousel2 } from "../../components/YouTubeCarousel2";
import SpotifyEmbed from "../../components/SpotifyEmbed";
import DiscordEmbed from "../../components/DiscordEmbed";
import InstagramEmbed from "../../components/InstagramEmbed";
import TikTokEmbed from "../../components/TikTokEmbed";
import GoogleCalendarEmbed from "../../components/GoogleCalendarEmbed";

export default function FindMe() {
  return (
    <main>
      <div className="container grid grid-cols-6 gap-2">
        <div className="col-start-1 col-end-3 pt-16 -rotate-12">
          <SpotifyEmbed />
          <h1>{} Spotify</h1>
        </div>
        <div className="col-end-7 col-span-3 pt-8 -rotate-12">
          <h1 className="text-center">Calendar</h1>
          <GoogleCalendarEmbed />
        </div>
        <div className="col-start-1 col-end-4 pt-8 hidden md:block col-span-2 -rotate-12">
          <h1 className="text-center">{} Youtube</h1>
          <YouTubeCarousel />
        </div>
        <div className="col-start-1 col-end-4 pt-3 block md:hidden col-span-2 -rotate-12">
          <h1 className="text-end">{} Youtube</h1>
          <YouTubeCarousel2 />
        </div>
        <div className="col-end-7 col-span-2 pt-16 -rotate-12">
          <DiscordEmbed />
          <h1 className="text-end">Discord {}</h1>
        </div>
        <div className="col-start-1 col-end-3 py-14 -rotate-12">
          <TikTokEmbed />
          <h1>{} TikTok</h1>
        </div>
        <div className="col-end-7 col-span-2 py-14 -rotate-12">
          <InstagramEmbed />
          <h1>{} Instagram</h1>
        </div>
      </div>
    </main>
  );
}
