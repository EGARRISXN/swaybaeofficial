import Link from 'next/link'
import {socials} from '@/lib/constants'

export default function ContactSocials({mobileStyle}) {
  return (
    <section
      className={`${mobileStyle ? 'mt-12' : ''} rounded-2xl border-2 bg-base-100 shadow-lg shadow-purple-800/50 ${mobileStyle ? 'py-4' : 'py-8'} px-8`}
    >
      <h3 className='lobster text-center text-3xl text-primary lg:text-4xl'>Let&apos;s Connect!</h3>

      <hr className='my-4 border-secondary' />

      {mobileStyle ? (
        <div className='flex justify-center space-x-4 transition-all'>
          {socials.map((icon, idx) => (
            <Link
              key={idx}
              href={icon.href}
              className='flex items-center text-secondary duration-300 hover:scale-105 hover:text-primary'
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      ) : (
        <div className='mb-3 grid grid-cols-2 gap-4 text-sm md:text-base lg:text-lg'>
          {socials.map((icon, idx) => (
            <div key={idx} className='flex items-center transition-all '>
              <Link
                href={icon.href}
                className='flex items-center text-secondary duration-300 hover:scale-105 hover:text-primary'
              >
                {icon.icon}
                <span className='ml-2 text-base-content'>{icon.label}</span>
              </Link>
            </div>
          ))}
        </div>
      )}

      <hr className='my-4 border-secondary' />

      <p className='text-center text-lg'>
        If you&#39;d prefer, feel free to email me directly:
        <br />
        <span className='text-primary hover:text-primary-focus'>
          <Link href='mailto:Sway.Bae9000@gmail.com'>Sway.Bae9000@gmail.com</Link>
        </span>
      </p>
    </section>
  )
}
