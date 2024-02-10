import Link from 'next/link'
import {IoHomeOutline} from 'react-icons/io5'
import {BsEmojiSmileUpsideDown} from 'react-icons/bs'

export default function StudioNavbar() {
  return (
    <div className='flex items-center justify-between bg-slate-950 px-5 py-1 text-white'>
      <div>
        <Link href='/' target='_blank' rel='noopener noreferrer'>
          <IoHomeOutline />
        </Link>
      </div>
      <div className='text-2xl'>
        Sway&#39;s <span className='text-purple-500'>Studio</span>
      </div>
      <div>
        <Link
          href='https://youtu.be/LLFhKaqnWwk?si=Q2I27OruJArp-pHf'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsEmojiSmileUpsideDown />
        </Link>
      </div>
    </div>
  )
}
