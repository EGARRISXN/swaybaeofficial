'use client'
import {useState} from 'react'
import MyButton from '@/components/(ui)/MyButton'

export default function AboutCard() {
  const [isShowMore, setIsShowMore] = useState(false)

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore)
  }

  return (
    <div className='prose prose-sm prose-slate mt-12 rounded-3xl border-4 border-base-content bg-base-200 p-6 shadow-lg shadow-purple-800/50 dark:prose-invert lg:prose-lg prose-a:text-primary prose-li:marker:text-primary sm:mt-0 sm:p-8 md:p-10 lg:p-12 2xl:p-14 3xl:p-16'>
      <div className='lobster mb-4 text-4xl text-primary lg:text-6xl'>I&apos;m Sway!</div>
      <hr className='hr-lines my-2 border-secondary' />
      <p className='my-4'>
        I am a Full-Time Content Creator as of June 2021. I am currently partnered with both Twitch
        and YouTube, streaming and releasing videos multiple times per week.
        <br />
        <br />
        Did I ever imagine this would be my lifestyle, even five years ago? Nope. Do I love it?
        Entirely!
        <br />
        <br />
        I create family friendly entertainment centered around the concepts of positive mental
        attitude in gaming with the mantra of leaving someone's day better than I found it.
        <br />
        <br />
        My favorite part of streaming is the amazing community. You can find our Discord as you
        explore the website, but it is a very inclusive and supportive community that we have
        cultivated and a great place to connect outside of streams!.
        <br />
        <br />
        {/* Rest of the content */}
        {isShowMore && (
          <p>
            In addition, I am primarily a Hearthstone streamer, with a focus on Battlegrounds. I
            also enjoy Strategy games in general, Survival games, Indie games, Simulator games,
            Roguelike games, Platformers, and many more!
            <br />
            <br />
            A few notable accolades include:
            <br />
            <ul>
              <li>
                -3rd place in Blizzard's Hearthstone Battle of the Boars Tournament (May 2021)
              </li>
              <br />
              <li>-Casting the Gaming Arena Hearthstone Tournament. (June 2021)</li>
              <br />
              <li>
                -Casting and Hosting multiple Dreamhack Community Clash tournaments. (2021-2022)
              </li>
              <br />
              <li>
                -Casting 4 series of Super Girl Gamer Pro Hearthstone Tournaments. (2021-2023)
              </li>
              <br />
              <li>
                -Multiple Battle.net Launcher Features for featured streams or YouTube videos
                created for Hearthstone.
              </li>
              <br />
              <li>
                -Producing, hosting, and casting one of the earliest, largest grassroots tournaments
                for Hearthstone Battlegrounds, with almost 100 participants!
              </li>
            </ul>
            <br />
            <br />
            If you'd like to work with me, I'd love to hear from you! You can use the Business
            Inquiries tab above!
            <br />
            <br />
            If you'd like to work with me, I'd love to hear from you! You can use the Business
            Inquiries tab above!
            <br />
            <br />
            Check out my brand new BLOG for more!
            <br />
            <br />
            As I often say, thank you for being a part of my journey, and allowing me to be a part
            of yours!
            <br />
            <br />
            <span className='font-bold'>
              XOXO,
              <br />
              Sway Bae
            </span>
          </p>
        )}
      </p>
      <br />
      <div className='flex justify-end'>
        <MyButton onClick={toggleReadMoreLess}>{isShowMore ? 'Read Less' : 'Read More'}</MyButton>
      </div>
    </div>
  )
}
