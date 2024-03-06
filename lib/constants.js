import {RxDiscordLogo} from 'react-icons/rx'
import {TbBrandTiktok} from 'react-icons/tb'
import {PiYoutubeLogoBold} from 'react-icons/pi'
import {SlSocialSpotify} from 'react-icons/sl'
import {FiTwitch} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'

export const socials = [
  {
    imageSrc: '/TwitchCard.png',
    alt: 'Twitch',
    label: 'Twitch',
    username: 'Sway_bae',
    icon: <FiTwitch />,
    href: 'https://www.twitch.tv/sway_bae',
  },
  {
    imageSrc: '/YoutubeCard.png',
    alt: 'YouTube',
    label: 'YouTube',
    username: 'SwaybaeTV',
    icon: <PiYoutubeLogoBold />,
    href: 'https://m.youtube.com/channel/UCbpQhE5NYQ05pSp_DJJQxCA',
  },
  {
    imageSrc: '/TwitterCard.png',
    alt: 'Twitter',
    label: 'Twitter',
    username: 'Sway_baeTV',
    icon: <FiTwitter />,
    href: 'https://twitter.com/sway_baetv',
  },
  {
    imageSrc: '/DiscordCard.png',
    alt: 'Discord',
    label: 'Discord',
    username: 'Sway_bae',
    icon: <RxDiscordLogo />,
    href: 'https://discord.com/invite/K73uN9k',
  },
  {
    imageSrc: '/SpotifyCard.png',
    alt: 'Spotify',
    label: 'Spotify',
    username: 'Swaybae',
    icon: <SlSocialSpotify />,
    href: 'https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq',
  },

  {
    imageSrc: '/TikTokCard.png',
    alt: 'TikTok',
    label: 'TikTok',
    username: 'Sway_baeTV',
    icon: <TbBrandTiktok />,
    href: 'https://www.tiktok.com/@sway_baetv',
  },

  {
    imageSrc: '/InstagramCard.png',
    alt: 'Instagram',
    label: 'Instagram',
    username: 'Sway_baeTV',
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/sway_baetv',
  },
]
