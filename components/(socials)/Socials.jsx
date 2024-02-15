'use client'
import Link from 'next/link'
import {FiYoutube} from 'react-icons/fi'
import SpotifyEmbed from './SpotifyEmbed'
import SocialCarousel from './SocialCarousel'
import YoutubeEmbed from './YouTubeEmbed'

export default function Socials() {
  return (
    <div id='socials' className='w-full'>
      <div className='mx-auto max-w-7xl pb-16 pt-4 lg:pt-16'>
        <div className='mt-2 flex flex-col justify-between sm:flex-row sm:px-6 md:pl-16 md:pr-16'>
          <p className='font-bold-200 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text px-2 font-poppins text-xl uppercase tracking-widest text-transparent'>
            Socials
          </p>
          <div className='mt-8 lg:mt-16'>
            <SpotifyEmbed />
          </div>
        </div>
        <br />
        <div className='px-2 pb-4'>
          <SocialCarousel />
        </div>
        <div className='mx-auto px-4 sm:px-6 md:px-12 lg:px-16'>
          <div className='my-4 flex items-center justify-center bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text text-center text-lg text-accent text-transparent md:text-xl lg:my-8 lg:text-3xl'>
            Latest
            <Link
              target='_blank'
              href='https://www.youtube.com/sway_baetv/'
              className='mx-2 text-primary hover:underline'
            >
              YoutTube
            </Link>
            Videos |
            <span className='ml-2 text-base-content'>
              <FiYoutube />
            </span>
          </div>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            <div className='rounded-xl border-4 bg-base-100 p-2 shadow-lg shadow-purple-800/50'>
              <YoutubeEmbed vnum={0} />
            </div>
            <div className='rounded-xl border-4 bg-base-100 p-2 shadow-lg shadow-purple-800/50'>
              <YoutubeEmbed vnum={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
