'use client'
import {useState, useEffect} from 'react'
import {FiChevronUp} from 'react-icons/fi'

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false)

  function scrollToTopSmoothly() {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
      window.requestAnimationFrame(scrollToTopSmoothly)
      window.scrollTo(0, c - c / 8) // You can adjust the divisor to control scrolling speed
    } else {
      // Stop animation when scroll position is zero or below
      window.cancelAnimationFrame(scrollToTopSmoothly)
    }
  }

  function backToTop() {
    scrollToTopSmoothly()
  }

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

  return (
    <>
      <FiChevronUp
        className='scrollToTop z-[1000] rounded-full border-2 border-base-content bg-base-200'
        onClick={backToTop}
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
