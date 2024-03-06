import Link from 'next/link'
import {socials} from '@/lib/constants'

export default function SocialButtons() {
  return (
    <div className='flex flex-row gap-2'>
      {socials.map((icon, idx) => (
        <div key={idx}>
          <Link
            href={icon.href}
            className='inline-flex rounded-full border-transparent bg-white p-2 font-extrabold text-primary shadow-md transition-all duration-300 ease-out hover:scale-105 hover:bg-slate-100 focus:outline-none'
          >
            {icon.icon}
          </Link>
        </div>
      ))}
    </div>
  )
}
