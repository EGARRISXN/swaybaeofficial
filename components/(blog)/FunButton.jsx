export default function FunButton() {
  return (
    <div className='group relative inline-block text-lg'>
      <span className='relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white '>
        <span className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3 dark:bg-white'></span>
        <span className='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-[#222] transition-all duration-300 group-hover:-rotate-180 dark:bg-[#8F00FF]'></span>
        <span className='relative'>
          <svg
            aria-hidden='true'
            className='mr-2 inline-flex h-5 w-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
              clipRule='evenodd'
            />
          </svg>
          Go back
        </span>
      </span>
      <span className='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-[#222] transition-all duration-200  ease-linear group-hover:mb-0 group-hover:mr-0 dark:bg-[#8F00FF]'></span>
    </div>
  )
}
