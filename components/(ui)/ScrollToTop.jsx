'use client'
import {useState, useEffect} from 'react'
import {FiChevronUp} from 'react-icons/fi'

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
    <>
      <FiChevronUp
        className='scrollToTop z-[1000] rounded-full border-2 border-base-content bg-base-200'
        onClick={scrollToTop}
        style={{
          height: 40,
          width: 40,
          position: 'fixed',
          right: 20,
          bottom: 20,
          display: showScroll ? 'flex' : 'none',
          padding: 10,
          cursor: 'pointer',
        }}
      />
    </>
  )
}
