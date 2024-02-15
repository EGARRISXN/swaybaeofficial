export default function GoogleCalendarEmbed() {
  return (
    <div className='aspect-h-16 aspect-w-9 mx-auto rounded-2xl border-4 bg-base-100 shadow-xl shadow-purple-800/50 md:aspect-h-9 md:aspect-w-16'>
      <iframe
        src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showPrint=0&showTitle=0&showNav=1&showDate=1&showCalendars=0&src=NjM3Mzk0MzZhMmVhMTIwYTM0MWVjMTNhYmZmYzRiMTI4OWY3NzI0MGE4MzdkMTIwNDNiZWQ4MWNlNmM3OGUxY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5'
        width='100%'
        height='100%'
        className='rounded-xl bg-white p-2'
        allow='fullscreen'
      ></iframe>
    </div>
  )
}
