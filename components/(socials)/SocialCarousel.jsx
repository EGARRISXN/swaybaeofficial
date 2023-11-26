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
      username: "@Sway_bae",
      linkText: "Twitch",
      linkUrl: "https://www.twitch.tv/sway_bae",
    },
    {
      imageSrc: TikTokCard,
      alt: "TikTok",
      title: "TikTok",
      username: "@sway_baeTV",
      linkText: "TikTok",
      linkUrl: "https://www.tiktok.com/@sway_baetv",
    },
    {
      imageSrc: TwitterCard,
      alt: "Twitter",
      title: "Twitter",
      username: "@sway_baeTV",
      linkText: "Twitter",
      linkUrl: "https://twitter.com/sway_baetv",
    },
    {
      imageSrc: InstagramCard,
      alt: "Instagram",
      title: "Instagram",
      username: "@sway_baeTV",
      linkText: "Instagram",
      linkUrl: "https://www.instagram.com/sway_baetv",
    },
    {
      imageSrc: DiscordCard,
      alt: "Discord",
      title: "Discord",
      username: "@Sway_bae",
      linkText: "Discord",
      linkUrl: "https://discord.com/invite/K73uN9k",
    },
    {
      imageSrc: YoutubeCard,
      alt: "YouTube",
      title: "YouTube",
      username: "@SwaybaeTV",
      linkText: "Youtube",
      linkUrl: "https://m.youtube.com/channel/UCbpQhE5NYQ05pSp_DJJQxCA",
    },
    {
      imageSrc: SpotifyCard,
      alt: "Spotify",
      title: "Spotify",
      username: "@Swaybae",
      linkText: "Spotify",
      linkUrl: "https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq",
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center text-center py-8">
      <button
        onClick={scrollLeft}
        className="flex justify-start p-2 rounded-full bg-base-200 border-base-content border-2"
      >
        <FiChevronLeft />
      </button>
      <div
        id="content"
        className="carousel flex overscroll-auto border-1 rounded-2xl shadow-md"
      >
        {socialMediaData.map((data, index) => (
          <SocialCard key={index} {...data} />
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="flex justify-end p-2 rounded-full bg-base-200 border-base-content border-2"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
