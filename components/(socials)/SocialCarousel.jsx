"use client"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import SocialCard from "./SocialCard"
import DiscordCard from "../../public/images/DiscordCard.png"
import TwitchCard from "../../public/images/TwitchCard.png"
import InstagramCard from "../../public/images/InstagramCard.png"
import TikTokCard from "../../public/images/TikTokCard.png"
import TwitterCard from "../../public/images/TwitterCard.png"
import YoutubeCard from "../../public/images/YoutubeCard.png"
import SpotifyCard from "../../public/images/SpotifyCard.png"

export default function SocialCarousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400
  }
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400
  }

  const socialMediaData = [
    {
      imageSrc: TwitchCard,
      alt: "Twitch",
      title: "Twitch",
      username: "@sway_bae",
      linkText: "Stream",
      linkUrl: "https://www.twitch.tv/sway_bae",
    },
    {
      imageSrc: TikTokCard,
      alt: "TikTok",
      title: "TikTok",
      username: "@sway_baetv",
      linkText: "Follow",
      linkUrl: "https://www.tiktok.com/@sway_baetv",
    },
    {
      imageSrc: TwitterCard,
      alt: "Twitter",
      title: "Twitter",
      username: "@sway_baetv",
      linkText: "Tweet",
      linkUrl: "https://twitter.com/sway_baetv",
    },
    {
      imageSrc: InstagramCard,
      alt: "Instagram",
      title: "Instagram",
      username: "@sway_baetv",
      linkText: "Picture",
      linkUrl: "https://www.instagram.com/sway_baetv",
    },
    {
      imageSrc: DiscordCard,
      alt: "Discord",
      title: "Discord",
      username: "@sway_bae",
      linkText: "Hang",
      linkUrl: "https://discord.com/invite/K73uN9k",
    },
    {
      imageSrc: YoutubeCard,
      alt: "YouTube",
      title: "YouTube",
      username: "@swaybaetv",
      linkText: "Watch",
      linkUrl: "https://m.youtube.com/channel/UCbpQhE5NYQ05pSp_DJJQxCA",
    },
    {
      imageSrc: SpotifyCard,
      alt: "Spotify",
      title: "Spotify",
      username: "@Swaybae",
      linkText: "Listen",
      linkUrl: "https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq",
    },
  ]

  return (
    <div className="relative mx-auto">
      <div className="absolute top-0 right-0">
        <button
          onClick={scrollLeft}
          className="p-2 m-2 rounded-full bg-transparent border-secondary border-4"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="p-2 m-2 rounded-full bg-transparent border-primary border-4"
        >
          <FiChevronRight />
        </button>
      </div>
      <div
        id="content"
        className="carousel flex sm:justify-start gap-8 sm:gap-16 scroll-smooth scrollbar-hide rounded-xl"
      >
        {socialMediaData.map((data, index) => (
          <SocialCard key={index} {...data} />
        ))}
      </div>
    </div>
  )
}
