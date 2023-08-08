import { YouTubeCarousel } from "../../components/YouTubeCarousel";
import { YouTubeCarousel2 } from "../../components/YouTubeCarousel2";
import SpotifyEmbed from "../../components/SpotifyEmbed";
import DiscordEmbed from "../../components/DiscordEmbed";
import InstagramEmbed from "../../components/InstagramEmbed";
import TikTokEmbed from "../../components/TikTokEmbed";

export default function FindMe() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="p-8 hidden md:block">
          <YouTubeCarousel />
        </div>
        <div className="p-8 block md:hidden">
          <YouTubeCarousel2 />
        </div>
        <div className="p-8">
          <SpotifyEmbed />
        </div>
        <div className="p-8">
          <DiscordEmbed />
        </div>
        <div className="p-8">
          <InstagramEmbed />
        </div>
        <div className="p-8">
          <TikTokEmbed />
        </div>
      </div>
    </main>
  );
}
