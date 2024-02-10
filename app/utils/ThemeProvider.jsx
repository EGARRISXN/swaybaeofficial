'use client'
import {useState, useEffect} from 'react'
import {ThemeProvider} from 'next-themes'

export default function Provider({children}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <ThemeProvider defaultTheme='myDark'>{children}</ThemeProvider>
}
