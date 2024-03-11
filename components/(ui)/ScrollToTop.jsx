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
        className='scrollToTop z-40 rounded-full border-2 border-primary bg-light font-bold text-primary transition-all duration-200 ease-in hover:border-transparent hover:bg-primary hover:text-light lg:shadow-md dark:bg-dark dark:hover:text-dark'
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
