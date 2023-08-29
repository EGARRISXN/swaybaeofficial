"use client";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import SocialCard from "./SocialCard";
import DiscordCard from "../../public/images/DiscordCard.png";
import TwitchCard from "../../public/images/TwitchCard.png";
import InstagramCard from "../../public/images/InstagramCard.png";
import TikTokCard from "../../public/images/TikTokCard.png";
import TwitterCard from "../../public/images/TwitterCard.png";
import YoutubeCard from "../../public/images/YoutubeCard.png";
import SpotifyCard from "../../public/images/SpotifyCard.png";

export default function SocialCarousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  const socialMediaData = [
    {
      imageSrc: TwitchCard,
      alt: "Twitch",
      title: "Twitch",
      username: "@sway_bae",
      linkText: "Streaming Now",
      linkUrl: "https://www.twitch.tv/sway_bae",
    },
    {
      imageSrc: TikTokCard,
      alt: "TikTok",
      title: "TikTok",
      username: "@sway_baetv",
      linkText: "Follow Along",
      linkUrl: "https://www.tiktok.com/@sway_baetv",
    },
    {
      imageSrc: TwitterCard,
      alt: "Twitter",
      title: "Twitter",
      username: "@sway_baetv",
      linkText: "Stay Informed",
      linkUrl: "https://twitter.com/sway_baetv",
    },
    {
      imageSrc: InstagramCard,
      alt: "Instagram",
      title: "Instagram",
      username: "@sway_baetv",
      linkText: "Picture it",
      linkUrl: "https://www.instagram.com/sway_baetv",
    },
    {
      imageSrc: DiscordCard,
      alt: "Discord",
      title: "Discord",
      username: "@sway_bae",
      linkText: "Come Hang",
      linkUrl: "https://discord.com/invite/K73uN9k",
    },
    {
      imageSrc: YoutubeCard,
      alt: "YouTube",
      title: "YouTube",
      username: "@swaybaetv",
      linkText: "Watch This",
      linkUrl: "https://m.youtube.com/channel/UCbpQhE5NYQ05pSp_DJJQxCA",
    },
    {
      imageSrc: SpotifyCard,
      alt: "Spotify",
      title: "Spotify",
      username: "@Sway Bae",
      linkText: "Listen Up",
      linkUrl: "https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq",
    },
  ];

  return (
    <div className="relative mx-auto justify-center items-center">
      <div className="absolute right-0 top-0">
        <button
          onClick={scrollLeft}
          className="p-2 m-2 rounded-full bg-transparent border-secondary border-4"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="p-2 m-2 rounded-full bg-transparentv border-primary border-4"
        >
          <FiChevronRight />
        </button>
      </div>
      <div
        id="content"
        className="carousel h-[500px] px-3 space-x-10 flex items-center justify-start scroll-smooth scrollbar-hide"
      >
        {socialMediaData.map((data, index) => (
          <SocialCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}
