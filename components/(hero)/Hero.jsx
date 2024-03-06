'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <main className='w=full'>
      <label className='sr-only'>Hero</label>
      <section className='z-[50] mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl items-center justify-center'>
        <motion.div
          className='z-[50] flex max-w-[900px] items-center justify-center'
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
        >
          <Image
            src='/herologo.png'
            quality={100}
            width={1450}
            height={900}
            alt='Hero'
            className='flex h-full w-full flex-shrink'
            priority
          />
        </motion.div>
      </section>
    </main>
  )
}
