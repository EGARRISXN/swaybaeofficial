'use client'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import SocialCard from '@components/(socials)/SocialCard'
import {socialMediaData} from '@utils/socialMediaData'

export default function SocialCarousel() {
  const scrollLeft = () => {
    document.getElementById('content').scrollLeft -= 400
  }
  const scrollRight = () => {
    document.getElementById('content').scrollLeft += 400
  }

  return (
    <div className='flex flex-row items-center justify-center py-8 text-center'>
      <button
        onClick={scrollLeft}
        className='flex justify-start rounded-full border-2 border-base-content bg-base-200 p-2'
      >
        <FiChevronLeft />
      </button>
      <div id='content' className='border-1 carousel flex overscroll-auto rounded-2xl shadow-md'>
        {socialMediaData.map((data, index) => (
          <SocialCard key={index} {...data} />
        ))}
      </div>
      <button
        onClick={scrollRight}
        className='flex justify-end rounded-full border-2 border-base-content bg-base-200 p-2'
      >
        <FiChevronRight />
      </button>
    </div>
  )
}
