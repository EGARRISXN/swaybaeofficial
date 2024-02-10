import GoogleCalendarEmbed from '@/app/components/(socials)/GoogleCalendarEmbed'
import PageName from '@/app/components/(ui)/PageName'

export default function Calendar() {
  return (
    <div id='calendar' className='w-full'>
      <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
        <PageName>Calendar</PageName>
        <br />
        <div className='mt-4 px-4 sm:px-8 md:px-12 lg:mt-16 lg:px-16 xl:px-20 2xl:px-24'>
          <GoogleCalendarEmbed />
        </div>
      </div>
    </div>
  )
}
