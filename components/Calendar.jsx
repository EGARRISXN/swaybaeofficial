import GoogleCalendarEmbed from "../components/(socials)/GoogleCalendarEmbed";

export default function Calendar() {
  return (
    <div id="about" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex pl-2 sm:pl-6 md:pl-16 mt-2">
          <h1 className="font-poppins uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Calendar
          </h1>
        </div>
        <br />
        <div className="flex flex-col-reverse mx-auto justify-center mt-16 xs:px-2 sm:px-6 md:px-12 lg:px-16 sm:gap-y-12 md:flex-row md:space-x-8">
          <div className=" shadow-purple-800/50">
            <GoogleCalendarEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}
