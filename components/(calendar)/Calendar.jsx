import GoogleCalendarEmbed from './GoogleCalendarEmbed'
import PageName from '@/components/(other)/PageName'

export default function Calendar() {
  return (
    <div id='calendar' className='w-full'>
      <div className='mx-auto max-w-7xl pb-16 pt-4 lg:pt-16'>
        <PageName>Calendar</PageName>
        <br />
        <div className='mt-4 px-4 sm:px-8 md:px-12 lg:mt-16 lg:px-16 xl:px-20 2xl:px-24'>
          <GoogleCalendarEmbed />
        </div>
      </div>
    </div>
  )
}
