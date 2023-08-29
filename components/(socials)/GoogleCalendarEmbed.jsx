export default function GoogleCalendarEmbed() {
  return (
    <div className=" rounded-b-3xl shadow-2xl shadow-purple-800/50 ">
      <iframe
        className="rounded-b-xl shadow-2xl shadow-purple-800/50"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&showTz=1&src=NjM3Mzk0MzZhMmVhMTIwYTM0MWVjMTNhYmZmYzRiMTI4OWY3NzI0MGE4MzdkMTIwNDNiZWQ4MWNlNmM3OGUxY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5"
        style={{
          width: 352,
          height: 320,
          frameborder: 0,
          borderWidth: 0,
        }}
      ></iframe>
    </div>
  );
}
