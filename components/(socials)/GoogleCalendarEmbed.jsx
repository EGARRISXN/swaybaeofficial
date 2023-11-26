export default function GoogleCalendarEmbed() {
  return (
    <div className="max-w-6xl md:mb-12 rounded-lg grid p-1 mx-auto shadow-xl">
      <div className="aspect-w-9 aspect-h-16 md:aspect-w-16 md:aspect-h-9 rounded-lg border-2 shadow-xl border-white">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showPrint=0&showTitle=0&showNav=1&showDate=1&showCalendars=0&src=NjM3Mzk0MzZhMmVhMTIwYTM0MWVjMTNhYmZmYzRiMTI4OWY3NzI0MGE4MzdkMTIwNDNiZWQ4MWNlNmM3OGUxY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5"
          width="100%"
          height="100%"
          className="h-full w-full border-2 border-white shadow-xl rounded-lg p-1"
        ></iframe>
      </div>
    </div>
  );
}
