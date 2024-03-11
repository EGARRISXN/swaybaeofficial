'use client'
import Link from 'next/link'
import Image from 'next/image'
import PageName from '@/components/(other)/PageName'
import SpotifyNowPlaying from '@/components/(spotify)/SpotifyNowPlaying'
import YoutubeEmbed from './YouTubeEmbed'
import SocialsCarousel from './SocialsCarousel'
import {FiYoutube} from 'react-icons/fi'

export default function Socials() {
  return (
    <main className='w-full'>
      <label className='sr-only'>Socials</label>
      <div className='mx-auto max-w-7xl px-2 pb-12 pt-4 lg:px-4 lg:pt-16'>
        <header className='mt-2 flex flex-row justify-between max-[320px]:flex-col'>
          <PageName>Socials</PageName>
          <div className='mt-0 max-[320px]:mx-auto max-[320px]:mt-8 lg:pr-12'>
            <SpotifyNowPlaying />
          </div>
        </header>
        <br />
        <section className='mx-auto my-4 px-2 sm:px-4 md:px-8 lg:mb-24 lg:mt-12 lg:px-12 '>
          <SocialsCarousel />
          <div className='mt-6'>
            <a href='https://www.throne.com/sway_bae' target='_blank' rel='noreferrer'>
              <div className='flex flex-row items-center justify-center text-sm tracking-tight max-[370px]:text-xs sm:text-lg'>
                If you'd like to support what I do:
                <span className='ml-1 mr-0.5 block font-black uppercase max-[300px]:hidden '>
                  THRONE
                </span>
                <div className='mask mask-circle size-5 max-[370px]:ml-1 max-[370px]:size-4 sm:size-6 '>
                  <Image src='/throne.jpg' alt='Throne' width={24} height={24} />
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className='mx-auto my-8 px-2 sm:px-4 md:px-8 lg:my-16 lg:px-12'>
          <div className='mb-4 mt-8 flex items-center justify-center text-center text-xl sm:text-3xl md:text-4xl'>
            <span className='mr-1 text-primary sm:mr-2'>
              <FiYoutube />
            </span>
            Latest
            <Link
              target='_blank'
              href='https://www.youtube.com/sway_baetv/'
              className='mx-1 bg-gradient-to-b from-navy via-pink to-pink bg-clip-text text-transparent sm:mx-2'
            >
              YoutTube
            </Link>
            Videos
          </div>
          <div className='my-4 grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='rounded-xl border-2 p-2 shadow-md shadow-purple-500/80 lg:rounded-2xl'>
              <YoutubeEmbed vnum={0} />
            </div>
            <div className='rounded-xl border-2 p-2 shadow-md shadow-purple-500/80 lg:rounded-2xl'>
              <YoutubeEmbed vnum={1} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
