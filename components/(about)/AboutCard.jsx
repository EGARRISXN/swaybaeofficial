'use client'
import Link from 'next/link'
import {useState} from 'react'
import MyButton from '@/components/(ui)/MyButton'

export default function AboutCard() {
  const [isShowMore, setIsShowMore] = useState(false)

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore)
  }

  return (
    <section className='mx-auto mt-12 max-w-4xl rounded-3xl border-0 bg-base-100 p-2 md:mt-0 md:border-2 md:p-8 md:shadow-lg md:shadow-purple-800/50 lg:p-16'>
      <div className='prose prose-base prose-slate lg:prose-lg dark:prose-invert prose-h1:font-medium prose-h1:leading-10 prose-h1:tracking-tight prose-h1:text-primary prose-h3:leading-snug prose-h3:tracking-tight prose-h4:tracking-tight prose-p:font-medium prose-p:leading-snug prose-p:tracking-tight prose-blockquote:border-primary prose-blockquote:leading-snug prose-blockquote:tracking-tight prose-blockquote:text-secondary prose-ul:list-outside prose-li:leading-normal prose-li:tracking-tight prose-li:marker:text-secondary'>
        <h1 className='lobster ml-1 text-[3rem] xl:text-[4rem]'>Hello, I'm Sway!</h1>
        <h3 className='font-medium'>
          I am a Full-Time Content Creator since June of 2021. Currently, I'm partnered with both
          Twitch and YouTube, streaming and releasing videos multiple times per week.
        </h3>
        <p>
          I create family-friendly entertainment centered around the concepts of positive mental
          attitude in gaming with the mantra of leaving someone's day better than I found it.
        </p>
        <p>
          My favorite part of streaming is the amazing community. You can find our Discord as you
          explore the website, but it is a very inclusive and supportive community that we have
          cultivated and a great place to connect outside of streams!
        </p>
        <blockquote>
          "Did I ever imagine this would be my lifestyle, even five years ago? Nope. Do I love it?
          Entirely!"
        </blockquote>
        {isShowMore && (
          <>
            <p>
              In addition, I am primarily a Hearthstone streamer, with a focus on Battlegrounds. I
              also enjoy Strategy games in general, Survival games, Indie games, Simulator games,
              Roguelike games, Platformers, and many more!
            </p>
            <h4 className='text-primary'>A few notable accolades include:</h4>
            <ul className='mb-4 ml-8 list-disc'>
              <li>
                3rd place in Blizzard's Hearthstone Battle of the Boars Tournament{' '}
                <span className='font-semibold'>(May 2021)</span>
              </li>
              <li>
                Casting the Gaming Stadium Hearthstone Tournament.{' '}
                <span className='font-semibold'>(June 2021)</span>
              </li>
              <li>
                Casting and Hosting multiple Dreamhack Community Clash tournaments.{' '}
                <span className='font-semibold'>(2021-2022)</span>
              </li>
              <li>
                Casting 4 series of Super Girl Gamer Pro Hearthstone Tournaments.{' '}
                <span className='font-semibold'>(2021-2023)</span>
              </li>
              <li>
                Multiple Battle.net Launcher Feature events, including featured streams and curated
                YouTube videos just for Hearthstone.
              </li>
              <li>
                Producing, hosting, and casting one of the earliest AND largest grassroots
                tournaments for Hearthstone Battlegrounds, with close to{' '}
                <span className='underline underline-offset-2'>100 participants!</span>
              </li>
            </ul>
            <p className='font-semibold'>
              If you'd like to work with me, I'd love to hear from you! You can use the contact form
              in the business inquiries section below!
            </p>
            <p>
              As I often say, thank you for being a part of my journey, and allowing me to be a part
              of yours!
            </p>
            <h3>
              <span className='text-secondary'>XOXO,</span>
              <br />
              Sway Bae
            </h3>
          </>
        )}
      </div>
      <hr className='my-8 border-secondary' />
      <div className='flex justify-center'>
        <MyButton onClick={toggleReadMoreLess}>{isShowMore ? 'Return' : 'Read More'}</MyButton>
      </div>
    </section>
  )
}
