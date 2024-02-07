import './globals.css'

export const metadata = {
  title: 'Sanity Studio!',
  description: 'Studio for editing Sanity.io content',
}

export default function StudioLayout({children}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
