'use client'
import Image from 'next/image'
import {Tabs} from './tabs'

export function TabsDemo() {
  const tabs = [
    {
      title: 'Home',
      value: 'home',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Home</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'About',
      value: 'about',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
          <p>About</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Calendar',
      value: 'calendar',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Calendar</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Contact',
      value: 'contact',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Contact</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Blog',
      value: 'blog',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Blog</p>
          <DummyContent />
        </div>
      ),
    },
  ]

  return (
    <div className='relative mx-auto my-16 flex h-[20rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem]'>
      <Tabs tabs={tabs} />
    </div>
  )
}

const DummyContent = () => {
  return (
    <Image
      src='/linear.webp'
      alt='dummy image'
      width='1000'
      height='1000'
      className='absolute inset-x-0 -bottom-10  mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]'
    />
  )
}
