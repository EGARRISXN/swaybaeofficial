import GoogleCalendarEmbed from "../components/(socials)/GoogleCalendarEmbed";

export default function Calendar() {
  return (
    <div id="about" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex flex-col mx-auto justify-center mt-16 xs:px-2 sm:px-6 md:px-12 lg:px-16">
          <div className=" shadow-purple-800/50">
            <GoogleCalendarEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}
