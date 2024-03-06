export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='sticky bottom-1 z-10 flex flex-1 items-center justify-center p-4 text-sm sm:text-base'>
        <div className='leading-4 text-base-content '>© 2024</div>
        <div className='mx-1 bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text px-1 font-bold leading-4 text-transparent'>
          | Sway Bae |
        </div>
        <div className='leading-4 text-base-content'>All rights reserved</div>
      </div>
    </footer>
  )
}
