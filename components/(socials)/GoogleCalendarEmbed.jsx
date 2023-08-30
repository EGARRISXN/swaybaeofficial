import Image from "next/image";
import CalendarHeader from "../../public/images/CalendarHeader.svg";

export default function GoogleCalendarEmbed() {
  return (
    <div className="border-[10px] bg-black rounded-md  border-base-content shadow-2xl shadow-purple-800/50">
      <Image
        src={CalendarHeader}
        quality={100}
        alt="Merch"
        width="100%"
        height="100%"
      />
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showPrint=0&showTitle=0&showNav=1&showDate=1&showCalendars=0&src=NjM3Mzk0MzZhMmVhMTIwYTM0MWVjMTNhYmZmYzRiMTI4OWY3NzI0MGE4MzdkMTIwNDNiZWQ4MWNlNmM3OGUxY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5"
          frameborder="0"
          borderWidth="0"
          width="100%"
          height="100%"
          className="rounded-b-sm"
        ></iframe>
      </div>
    </div>
  );
}
