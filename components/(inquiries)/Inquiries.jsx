'use client'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './ContactForm'
import ContactSocials from './ContactSocials'

export default function Inquiries() {
  return (
    <main className='w-full'>
      <label className='sr-only'>Inquiries</label>
      <div className='mx-auto max-w-7xl px-2 pb-12 pt-4 lg:px-4 lg:pt-16'>
        <h1 className='font-bold-200 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-poppins text-xl uppercase tracking-widest text-transparent'>
          Inquiries
        </h1>
        <br />
        <div className='mx-auto mb-4 mt-4 flex flex-col justify-center px-2 md:flex-row md:space-x-6 md:px-2 lg:mb-8 lg:mt-16 lg:space-x-10 lg:px-8 xl:space-x-12 xl:px-12'>
          <section className='rounded-xl md:w-3/5 2xl:w-2/3'>
            <ContactForm />
          </section>
          <section className='hidden rounded-xl md:block md:w-2/5 2xl:w-1/3'>
            <ContactSocials />
            <br />
            <Link
              href='https://beacons.ai/sway_bae/mediakit'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/mediakit.png'
                alt='Media Kit'
                width={600}
                height={350}
                quality={100}
                priority
              />
            </Link>
          </section>
          <section className='space-y-4 rounded-xl shadow-purple-800/50 md:hidden'>
            <ContactSocials mobileStyle />
          </section>
        </div>
      </div>
    </main>
  )
}
