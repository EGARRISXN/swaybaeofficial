export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='sticky bottom-1 z-10 flex flex-1 items-center justify-center p-4 text-sm max-[300px]:p-0 sm:text-base'>
        <div className='leading-4 text-base-content '>© 2024</div>
        <div className='mx-1 bg-gradient-to-tr from-secondary via-secondary to-primary bg-clip-text px-1 font-bold leading-4 text-transparent max-[300px]:mx-0 '>
          | Sway Bae |
        </div>
        <div className='leading-4 text-base-content'>All rights reserved</div>
      </div>
    </footer>
  )
}
