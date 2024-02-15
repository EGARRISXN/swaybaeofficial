'use client'
import {useEffect} from 'react'

export default function TopProgressBar() {
  useEffect(() => {
    function updateProgressBar() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100
      const progressBar = document.getElementById('progress-bar')
      if (progressBar) {
        progressBar.style.width = `${progress}%`
      }
    }

    window.addEventListener('scroll', updateProgressBar)

    return () => {
      window.removeEventListener('scroll', updateProgressBar)
    }
  }, [])

  return (
    <div
      id='progress-bar'
      className='fixed left-0 top-0 z-[500] h-3 w-0 scroll-smooth rounded-r-lg bg-primary shadow-lg shadow-purple-800/50 '
    ></div>
  )
}
