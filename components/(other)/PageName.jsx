export default function PageName({children}) {
  return (
    <div className='mt-2 flex pl-2 sm:pl-6 md:pl-16'>
      <p className='font-bold-200 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-poppins text-xl uppercase tracking-widest text-transparent'>
        {children}
      </p>
    </div>
  )
}
