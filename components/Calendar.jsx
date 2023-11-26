import GoogleCalendarEmbed from "../components/(socials)/GoogleCalendarEmbed";

export default function Calendar() {
  return (
    <div id="about" className="w-full">
      <div className="max-w-[1420px] mx-auto">
        <div className="px-1 md:px-16">
          <GoogleCalendarEmbed />
        </div>
      </div>
    </div>
  );
}
