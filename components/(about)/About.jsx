import AboutPhoto from './AboutPhoto'
import AboutCard from './AboutCard'
import PageName from '../(blog)/PageName'

export default function About() {
  return (
    <div id='about' className='w-full'>
      <div className='mx-auto max-w-7xl pb-16 pt-4 lg:pt-16'>
        <PageName>About</PageName>
        <br />
        <div className='mx-auto mt-4 flex flex-col-reverse justify-center px-4 sm:gap-y-12 sm:px-8 md:flex-row md:space-x-8 md:px-12 lg:mt-16 lg:space-x-12 lg:px-16 xl:space-x-16 xl:px-20 2xl:space-x-20 2xl:px-24'>
          <div className='md:w-3/5 xl:w-2/3'>
            <AboutCard />
          </div>

          <div className='md:w-2/5 xl:w-1/3'>
            <AboutPhoto />
          </div>
        </div>
      </div>
    </div>
  )
}
