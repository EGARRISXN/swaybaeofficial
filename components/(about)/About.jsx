import Image from 'next/image'
import AboutCard from './AboutCard'

export default function About() {
  return (
    <main className='w-full'>
      <label className='sr-only'>About</label>
      <div className='mx-auto max-w-7xl px-2 pb-12 pt-4 lg:px-4 lg:pt-16'>
        <h1 className='font-bold-200 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-poppins text-xl uppercase tracking-widest text-transparent'>
          About
        </h1>
        <br />
        <div className='mx-auto mb-4 mt-4 flex flex-col-reverse justify-center px-2 md:flex-row md:space-x-8 md:px-4 lg:mb-8 lg:mt-16 lg:space-x-10 lg:px-8 xl:space-x-12 xl:px-12'>
          <section className='md:w-3/5 xl:w-2/3'>
            <AboutCard />
          </section>
          <section className='md:w-2/5 xl:w-1/3'>
            <div className='h-full w-full py-1'>
              <Image
                src='/biff.jpg'
                alt='Sway'
                width={1440}
                height={1800}
                quality={100}
                priority
                className='rounded-2xl border-2 shadow-lg shadow-purple-800/50'
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
