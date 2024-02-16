'use client'
import {ThemeProvider} from 'next-themes'

export function Provider({children}) {
  return (
    <ThemeProvider attritbute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
