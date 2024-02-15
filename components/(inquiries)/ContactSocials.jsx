import Link from 'next/link'
import {socials} from '@/utils/constants'

export default function ContactSocials({mobileStyle}) {
  return (
    <div
      className={`${
        mobileStyle ? 'mt-12' : ''
      } rounded-3xl border-4 bg-base-100 shadow-lg shadow-purple-800/50 ${mobileStyle ? 'py-4' : 'py-8'} px-8`}
    >
      <div className='lobster text-center text-2xl text-primary md:text-left lg:text-3xl'>
        Let&apos;s Connect!
      </div>
      <hr className='my-4 border-secondary' />
      {mobileStyle ? (
        <div className='flex justify-center space-x-6 transition-transform '>
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
        // <ul className='mb-3 flex flex-col justify-center space-y-2'>
        //   {socials.map((icon, idx) => (
        //     <li key={idx}>
        //       <Link href={icon.href} className='flex items-center hover:text-secondary'>
        //         {icon.icon}
        //         <span className='ml-2'>{icon.label}</span>
        //       </Link>
        //     </li>
        //   ))}
        // </ul>
        <div className='mb-3 grid grid-cols-2 gap-4 text-sm lg:text-lg'>
          {socials.map((icon, idx) => (
            <div key={idx} className='flex items-center transition-transform '>
              <Link href={icon.href}>
                <div className='flex items-center text-secondary duration-300 hover:scale-105 hover:text-primary'>
                  {icon.icon}
                  <span className='ml-2 text-base-content'>{icon.label}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      <hr className='my-3 border-secondary' />
      <p className={`text-center text-sm md:text-xs lg:text-sm`}>
        Feel free to email me directly <br />
        <span className='text-primary hover:text-primary-focus'>
          <Link href='mailto:Sway.Bae9000@gmail.com'>Sway.Bae9000@gmail.com</Link>
        </span>
      </p>
    </div>
  )
}
