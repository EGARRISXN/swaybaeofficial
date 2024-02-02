import GoogleCalendarEmbed from "@/components/(socials)/GoogleCalendarEmbed";
import PageName from "@/components/(ui)/PageName";

export default function Calendar() {
  return (
    <div id="calendar" className="w-full">
      <div className="max-w-[1420px] mx-auto pt-4 pb-16 lg:pt-16">
        <PageName>Calendar</PageName>
        <br />
        <div className="mt-4 lg:mt-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <GoogleCalendarEmbed />
        </div>
      </div>
    </div>
  );
}
