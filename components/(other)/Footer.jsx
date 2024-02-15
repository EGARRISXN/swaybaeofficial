export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='sticky bottom-1 z-10 flex flex-1 items-center justify-center p-4'>
        <div>
          <p className='leading-4 text-base-content '>© 2024</p>
        </div>
        <div className='mx-1 px-1'>
          <p className='bg-gradient-to-tr from-primary via-info to-secondary bg-clip-text font-bold leading-4 text-transparent'>
            | Sway Bae |
          </p>
        </div>
        <div>
          <p className='leading-4 text-base-content'>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
