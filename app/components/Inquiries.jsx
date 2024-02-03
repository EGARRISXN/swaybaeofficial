'use client'
import ContactForm from '@components/(inquiries)/ContactForm'
import ContactSocials from '@components/(inquiries)/ContactSocials'
import MediaKitContainer from '@components/(inquiries)/MediaKitContainer'
import PageName from '@components/(ui)/PageName'

export default function Inquiries() {
  return (
    <div id='inquiries' className='w-full'>
      <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
        <PageName>Inquiries</PageName>
        <br />
        <div className='mx-auto mt-4 flex flex-col justify-center px-4 sm:px-8 md:flex-row md:space-x-8 md:px-12 lg:mt-16 lg:space-x-12 lg:px-16 xl:space-x-16 xl:px-20 2xl:space-x-20 2xl:px-24'>
          <div className='rounded-xl md:w-3/5 2xl:w-2/3'>
            <ContactForm />
          </div>
          <div className='hidden rounded-xl md:block md:w-2/5 2xl:w-1/3'>
            <ContactSocials />
            <MediaKitContainer />
          </div>
          <div className='space-y-4 rounded-xl shadow-purple-800/50 md:hidden'>
            <ContactSocials mobileStyle />
            <MediaKitContainer />
          </div>
        </div>
      </div>
    </div>
  )
}
