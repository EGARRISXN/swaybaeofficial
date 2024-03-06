'use client'
import {motion} from 'framer-motion'

export default function Calendar() {
  return (
    <div className='w-full'>
      <label className='sr-only'>Calendar</label>
      <div className='max-w-7xl pb-16 pt-4 sm:mx-auto sm:px-4 lg:pt-16'>
        <h1 className='font-bold-200 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-poppins text-xl uppercase tracking-widest text-transparent'>
          Calendar
        </h1>
        <br />
        <section className='mt-4 sm:px-4 md:px-8 lg:mt-16 lg:px-12 xl:px-16'>
          <motion.div
            className='aspect-h-16 aspect-w-9 rounded-2xl shadow-lg shadow-purple-800/50 md:aspect-h-9 md:aspect-w-16 md:mx-auto md:border-2'
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
          >
            <iframe
              src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showPrint=0&showTitle=0&showNav=1&showDate=1&showCalendars=0&src=NjM3Mzk0MzZhMmVhMTIwYTM0MWVjMTNhYmZmYzRiMTI4OWY3NzI0MGE4MzdkMTIwNDNiZWQ4MWNlNmM3OGUxY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5'
              width='100%'
              height='100%'
              className='rounded-xl bg-white p-1 sm:p-2'
              allow='fullscreen'
            ></iframe>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
