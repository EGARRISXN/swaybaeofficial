'use client'
import Link from 'next/link'
import {FiTwitch, FiYoutube} from 'react-icons/fi'
import SpotifyEmbed from '@components/(socials)/SpotifyEmbed'
import SocialCarousel from '@components/(socials)/SocialCarousel'
import TwitchEmbed from '@components/(socials)/TwitchEmbed'
import YoutubeEmbed from '@components/(socials)/YouTubeEmbed'

export default function Socials() {
  return (
    <div id='socials' className='w-full'>
      <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
        <div className='mt-2 flex flex-col justify-between px-2 sm:flex-row sm:px-6 md:pl-16 md:pr-16'>
          <p className='font-bold-200 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-poppins text-xl uppercase tracking-widest text-transparent'>
            Socials
          </p>
          <div className='mt-12 lg:mt-16'>
            <SpotifyEmbed />
          </div>
        </div>
        <br />
        <div className='mx-auto px-2 sm:px-6 md:px-12 lg:px-16'>
          <SocialCarousel />
          <br />
          <div className='grid grid-cols-1 p-4 md:grid-cols-2 md:p-8'>
            <div className='flex items-center justify-center bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text text-center text-accent text-transparent md:text-xl lg:text-3xl'>
              Latest
              <Link
                target='_blank'
                href='https://www.youtube.com/sway_baetv/'
                className='mx-2 text-primary underline hover:font-bold hover:text-warning'
              >
                YoutTube
              </Link>
              Video |
              <span className='ml-2 text-base-content'>
                <FiYoutube />
              </span>
            </div>
            <div className='rounded-xl p-4 shadow-lg shadow-purple-800/50'>
              <YoutubeEmbed vnum={0} />
            </div>
          </div>
          <br />
          <div className='hidden grid-cols-1 p-4 md:grid-cols-2 md:p-8 lg:grid'>
            <div className='rounded-xl p-4 shadow-lg shadow-purple-800/50'>
              <TwitchEmbed />
            </div>
            <div className='flex items-center justify-center bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text text-center text-3xl text-accent text-transparent'>
              <span className='mr-1 text-base-content'>
                <FiTwitch />
              </span>
              | Live
              <Link
                className='mx-2 text-primary underline hover:font-bold hover:text-warning'
                target='_blank'
                href='https://www.twitch.tv/sway_bae/'
              >
                Twitch
              </Link>
              Stream
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
