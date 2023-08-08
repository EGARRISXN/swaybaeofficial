export default function GoogleCalendarEmbed() {
  return (
    <div className="card bg-base-200 p-4 w-full shadow-xl shadow-purple-500/50 ">
      <iframe
        className="rounded-lg"
        src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=1&showNav=1&showDate=1&showPrint=0&showTabs=0&showTz=1&showCalendars=0&mode=MONTH&src=bWE2Y2MwcnVvdGliNDU4OXJrN28xaTNiYTBmZ2lhcnRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%230B8043"
        style={{
          width: 525,
          height: 300,
        }}
      ></iframe>
    </div>
  );
}
