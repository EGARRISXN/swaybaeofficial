import Animation from "../../components/Animation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import { YouTubeCarousel1 } from "../../components/(socials)/YouTubeCarousel1";
// import { YouTubeCarousel2 } from "../../components/(socials)/YouTubeCarousel2";
// import DiscordEmbed from "../../components/(socials)/DiscordEmbed";
// import InstagramEmbed from "../../components/(socials)/InstagramEmbed";
// import TikTokEmbed from "../../components/(socials)/TikTokEmbed";
// import GoogleCalendarEmbed from "../../components/(socials)/GoogleCalendarEmbed";
// import TwitchEmbed from "../../components/(socials)/TwitchEmbed";
// import SpotifyEmbed from "../../components/(socials)/SpotifyEmbed";

export default function Socials() {
  return (
    <Animation>
      <Navbar />
      <main>
        {/* <div className="container flex flex-row space-x-16 justify-center mt-16">
          <div>
            <TwitchEmbed />
          </div>
          <div>
            <SpotifyEmbed />
          </div>
        </div> */}
      </main>
      <Footer />
    </Animation>
  );
}
