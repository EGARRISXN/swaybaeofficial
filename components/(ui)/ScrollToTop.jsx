'use client'
import {useState, useEffect} from 'react'
import {TiArrowUpOutline} from 'react-icons/ti'

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const scrollToTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true)
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', scrollToTop)

    return function cleanup() {
      window.removeEventListener('scroll', scrollToTop)
    }
  }, [showScroll])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <label className='sr-only'>Scroll To Top</label>
      <TiArrowUpOutline
        className='scrollToTop z-[1000] rounded-full border-2 border-[#00ceff] bg-base-100 font-bold text-[#00ceff] transition-colors duration-100 ease-out hover:border-transparent hover:bg-[#00ceff] hover:text-base-100 lg:shadow-lg'
        onClick={scrollToTop}
        style={{
          height: 40,
          width: 40,
          position: 'fixed',
          right: 20,
          bottom: 20,
          display: showScroll ? 'flex' : 'none',
          padding: 5,
          cursor: 'pointer',
        }}
      />
    </div>
  )
}
