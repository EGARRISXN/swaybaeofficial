import { YouTubeCarousel1 } from "../../components/(socials)/YouTubeCarousel1";
import { YouTubeCarousel2 } from "../../components/(socials)/YouTubeCarousel2";
import SpotifyEmbed from "../../components/(socials)/SpotifyEmbed";
import DiscordEmbed from "../../components/(socials)/DiscordEmbed";
import InstagramEmbed from "../../components/(socials)/InstagramEmbed";
import TikTokEmbed from "../../components/(socials)/TikTokEmbed";
import GoogleCalendarEmbed from "../../components/(socials)/GoogleCalendarEmbed";

export default function Socials() {
  return (
    <main>
      <div className="container grid grid-cols-6 gap-2">
        <div className="col-start-1 col-end-3 pt-16 ">
          <SpotifyEmbed />
          <h1>{} Spotify</h1>
        </div>
        <div className="col-end-7 col-span-3 pt-8 ">
          <h1 className="text-center">Calendar</h1>
          <GoogleCalendarEmbed />
        </div>
        <div className="col-start-1 col-end-4 pt-8 hidden md:block col-span-2 ">
          <h1 className="text-center">{} Youtube</h1>
          <YouTubeCarousel1 />
        </div>
        <div className="col-start-1 col-end-4 pt-3 block md:hidden col-span-2 ">
          <h1 className="text-end">{} Youtube</h1>
          <YouTubeCarousel2 />
        </div>
        <div className="col-end-7 col-span-2 pt-16 ">
          <DiscordEmbed />
          <h1 className="text-end">Discord {}</h1>
        </div>
        <div className="col-start-1 col-end-3 py-14 ">
          <TikTokEmbed />
          <h1>{} TikTok</h1>
        </div>
        <div className="col-end-7 col-span-2 py-14 ">
          <InstagramEmbed />
          <h1>{} Instagram</h1>
        </div>
      </div>
    </main>
  );
}

// import { YouTubeCarousel1 } from "../../components/(socials)/YouTubeCarousel1";
// import { YouTubeCarousel2 } from "../../components/(socials)/YouTubeCarousel2";
// import SpotifyEmbed from "../../components/(socials)/SpotifyEmbed";
// import DiscordEmbed from "../../components/(socials)/DiscordEmbed";
// import InstagramEmbed from "../../components/(socials)/InstagramEmbed";
// import TikTokEmbed from "../../components/(socials)/TikTokEmbed";
// import GoogleCalendarEmbed from "../../components/(socials)/GoogleCalendarEmbed";

// export default function Socials() {
//   return (
//     <main>
//       <div className="container grid grid-cols-6 gap-2">
//         <div className="col-start-1 col-end-3 pt-16 ">
//           <SpotifyEmbed />
//           <h1>{} Spotify</h1>
//         </div>
//         <div className="col-end-7 col-span-3 pt-8 ">
//           <h1 className="text-center">Calendar</h1>
//           <GoogleCalendarEmbed />
//         </div>
//         <div className="col-start-1 col-end-4 pt-8 hidden md:block col-span-2 ">
//           <h1 className="text-center">{} Youtube</h1>
//           <YouTubeCarousel1 />
//         </div>
//         <div className="col-start-1 col-end-4 pt-3 block md:hidden col-span-2 ">
//           <h1 className="text-end">{} Youtube</h1>
//           <YouTubeCarousel2 />
//         </div>
//         <div className="col-end-7 col-span-2 pt-16 ">
//           <DiscordEmbed />
//           <h1 className="text-end">Discord {}</h1>
//         </div>
//         <div className="col-start-1 col-end-3 py-14 ">
//           <TikTokEmbed />
//           <h1>{} TikTok</h1>
//         </div>
//         <div className="col-end-7 col-span-2 py-14 ">
//           <InstagramEmbed />
//           <h1>{} Instagram</h1>
//         </div>
//       </div>
//     </main>
//   );
// }
