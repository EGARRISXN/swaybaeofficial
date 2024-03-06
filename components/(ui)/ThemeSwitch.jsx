'use client'
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'
import {BsMoonStarsFill, BsFillSunFill} from 'react-icons/bs'

export default function ThemeSwitch() {
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  const isDarkMode = theme === 'myDark'

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'myLight' : 'myDark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <label tabIndex={0} className={`swap swap-rotate btn-xs ${isDarkMode ? 'myLight' : 'myDark'}`}>
      <input type='checkbox' onChange={toggleTheme} />
      <BsMoonStarsFill
        className={`swap-on ${isDarkMode ? 'myLight-fill' : 'myDark-fill'} h-8 w-8 text-[#b567ad]`}
      />

      <BsFillSunFill
        className={`swap-off ${isDarkMode ? 'myLight-fill' : 'myDark-fill'} h-8 w-8 text-[#00ceff]`}
      />
    </label>
  )
}
