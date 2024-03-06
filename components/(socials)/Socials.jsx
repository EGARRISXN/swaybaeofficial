'use client'
import Link from 'next/link'
import SpotifyEmbed from './SpotifyEmbed'
import YoutubeEmbed from './YouTubeEmbed'
import SocialsCarousel from './SocialsCarousel'
import {FiYoutube} from 'react-icons/fi'

export default function Socials() {
  return (
    <main className='w-full'>
      <label className='sr-only'>Socials</label>
      <div className='mx-auto max-w-7xl px-2 pb-12 pt-4 lg:px-4 lg:pt-16'>
        <header className='mt-2 flex flex-col justify-between gap-4 sm:flex-row'>
          <div>
            <h1 className='font-bold-200 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-poppins text-xl uppercase tracking-widest text-transparent'>
              Socials
            </h1>
          </div>
          <div className='pt-8 sm:pt-0 lg:pr-12'>
            <SpotifyEmbed />
          </div>
        </header>
        <br />
        <section className='mx-auto my-4 px-2 sm:px-4 md:px-8 lg:mb-24 lg:mt-16 lg:px-12 '>
          <SocialsCarousel />
        </section>
        <section className='mx-auto my-8 px-2 sm:px-4 md:px-8 lg:mb-16 lg:mt-24 lg:px-12'>
          <div className='mb-4 mt-8 flex items-center justify-center bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text text-center text-lg text-accent text-transparent md:text-2xl xl:text-3xl'>
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
          <div className=' my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8'>
            <div className='rounded-xl border-2 p-2 shadow-lg shadow-purple-800/50 lg:rounded-2xl'>
              <YoutubeEmbed vnum={0} />
            </div>
            <div className='rounded-xl border-2 p-2 shadow-lg shadow-purple-800/50 lg:rounded-2xl'>
              <YoutubeEmbed vnum={1} />
            </div>
            <div className='rounded-xl border-2 p-2 shadow-lg shadow-purple-800/50 lg:rounded-2xl'>
              <YoutubeEmbed vnum={2} />
            </div>
            <div className='rounded-xl border-2 p-2 shadow-lg shadow-purple-800/50 lg:rounded-2xl'>
              <YoutubeEmbed vnum={3} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
