'use client'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import SocialCard from './SocialCard'
import {socials} from '@/utils/constants'

export default function SocialCarousel() {
  const scrollLeft = () => {
    document.getElementById('content').scrollLeft -= 400
  }
  const scrollRight = () => {
    document.getElementById('content').scrollLeft += 400
  }

  return (
    <div className='flex flex-row items-center justify-center pb-4 pt-8'>
      <button
        onClick={scrollLeft}
        className='mx-1 flex justify-start rounded-full border-2 border-base-content bg-base-200 p-2'
      >
        <FiChevronLeft />
      </button>
      <div id='content' className='carousel h-fit overscroll-auto'>
        {socials.map((data, idx) => (
          <SocialCard key={idx} {...data} />
        ))}
      </div>
      <button
        onClick={scrollRight}
        className='mx-1 flex justify-end rounded-full border-2 border-base-content bg-base-200 p-2'
      >
        <FiChevronRight />
      </button>
    </div>
  )
}
