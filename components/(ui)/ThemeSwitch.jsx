'use client'
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'
import {BsMoonStarsFill, BsFillSunFill} from 'react-icons/bs'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className='transition-all duration-200 ease-in hover:scale-110 active:scale-100'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <BsFillSunFill className='size-7 text-primary lg:size-8' />
      ) : (
        <BsMoonStarsFill className='size-7 text-secondary lg:size-8' />
      )}
    </button>
  )
}
