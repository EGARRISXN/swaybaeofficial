import './globals.css'

export const metadata = {
  title: 'Sanity Studio!',
  description: 'Studio for editing Sanity.io content',
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
