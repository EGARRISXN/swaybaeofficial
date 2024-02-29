import {CiSearch} from 'react-icons/ci'

export default function SearchBar() {
  return (
    <form className='flex items-center space-x-2 rounded-md border p-2'>
      <CiSearch className='size-4 flex-none' />
      <input
        className='w-40 appearance-none bg-base-100 outline-none sm:w-auto'
        type='text'
        placeholder='Search'
      />
    </form>
  )
}
