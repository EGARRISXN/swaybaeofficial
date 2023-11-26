import GoogleCalendarEmbed from "../components/(socials)/GoogleCalendarEmbed";

export default function Calendar() {
  return (
    <div id="about" className="w-full">
      <div className="max-w-[1420px]">
        <div className="p-1 shadow-xl rounded-lg">
          <GoogleCalendarEmbed />
        </div>
      </div>
    </div>
  );
}
