import './globals.css'
import {draftMode} from 'next/headers'
import LiveVisualEditing from '@/components/(other)/LiveVisualEditing'
import {Lobster, Poppins} from 'next/font/google'
import {ThemeProvider} from './providers'
import {Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from '@vercel/speed-insights/next'

const lobster = Lobster({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lobster',
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: '400',
})

export const metadata = {
  metadataBase: new URL('https://swaybae.net'),
  title: 'Sway Bae | Streaming, Gaming, & So Much More!',
  description: 'The Official Website for Sway Bae & The Bae Squad!',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'sway bae, swaybae, sway_bae, swaybaetv, sway, bae, swaybae.net, swaybae.com, thebaesquad, the bae squad, baesquad, bae_squad, sway bae twitch, sway bae twitter, sway bae youtube, sway bae discord, sway bae instagram, sway bae tiktok, sway bae merch, sway bae store, sway bae shop, sway bae gaming, hearthstone, blizzard, streamer, stream, twitch, twitch streamer, twitch.tv, twitch.tv/sway_bae, blog, sway bae blog, sway blog',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sway Bae | Streaming, Gaming, & So Much More!',
    description: 'The Official Website for Sway Bae & The Bae Squad!',
    url: 'https://swaybae.net',
    siteName: 'Swaybae.net',
  },
  // openGraph: {
  //   type: 'website',
  //   locale: 'en_US',
  //   title: 'Sway Bae | Streaming, Gaming, & So Much More!',
  //   description: 'The Official Website for Sway Bae & The Bae Squad!',
  //   url: 'https://swaybae.net',
  //   siteName: 'Swaybae.net',
  // },
  // twitter: {
  //   cardType: 'summary_large_image',
  //   handle: '@sway_baeTV',
  //   site: '@sway_baeTV',
  //   title: 'Sway Bae | Streaming, Gaming, & So Much More!',
  //   description: 'The Official Website for Sway Bae & The Bae Squad!',
  // },
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`${lobster.variable} ${poppins.variable}`}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          {children}
        </ThemeProvider>
        {draftMode().isEnabled && <LiveVisualEditing />}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
