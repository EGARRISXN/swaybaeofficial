'use client'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {SEARCH_QUERY} from '@/sanity/lib/queries'
import {useSearchParams, usePathname, useRouter} from 'next/navigation'
import {useDebouncedCallback} from 'use-debounce'
import {client} from '@/sanity/lib/client'
import {CiSearch} from 'react-icons/ci'

export default function SearchBar({placeholder}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = useDebouncedCallback(async (term) => {
    console.log(`Searching... ${term}`)

    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)

    console.log('Fetching search results...')
    if (term) {
      try {
        const response = await client.fetch(SEARCH_QUERY, {term})
        setSearchResults(response)
        console.log('Search results:', response)
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
    } else {
      setSearchResults([])
    }
  }, 300)

  useEffect(() => {
    function handleClickOutside(event) {
      if (!document.getElementById('search').contains(event.target)) {
        setSearchResults([])
      }
    }

    document.body.addEventListener('click', handleClickOutside)
    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleChange = (e) => {
    const {value} = e.target
    setSearchTerm(value)
    if (value.length >= 3) {
      handleSearch(value)
    } else {
      setSearchResults([])
    }
  }

  return (
    <div className='relative'>
      <div className='flex items-center space-x-2 rounded-md border p-2'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          id='search'
          className='w-40 appearance-none bg-base-100 outline-none sm:w-auto'
          placeholder={placeholder}
          onChange={handleChange}
          value={searchTerm}
        />
        <CiSearch className='size-4 flex-none' />
      </div>
      {searchResults.length > 0 && (
        <div className='z-1000 absolute left-0 top-full mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-white text-red-500 shadow-lg'>
          {searchResults.map((result) => (
            <div key={result._id} className='p-4 hover:bg-gray-100'>
              <Link href={`/blog/post/${result.slug.current}`}>{result.title}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// 'use client'
// import Link from 'next/link'
// import {useState} from 'react'
// import {SEARCH_QUERY} from '@/sanity/lib/queries'
// import {useSearchParams, usePathname, useRouter} from 'next/navigation'
// import {useDebouncedCallback} from 'use-debounce'
// import {client} from '@/sanity/lib/client'
// import {CiSearch} from 'react-icons/ci'

// export default function SearchBar({placeholder}) {
//   const searchParams = useSearchParams()
//   const pathname = usePathname()
//   const {replace} = useRouter()
//   const [searchResults, setSearchResults] = useState([])

//   const handleSearch = useDebouncedCallback(async (term) => {
//     console.log(`Searching... ${term}`)

//     const params = new URLSearchParams(searchParams)
//     if (term) {
//       params.set('query', term)
//     } else {
//       params.delete('query')
//     }
//     replace(`${pathname}?${params.toString()}`)

//     console.log('Fetching search results...')
//     if (term) {
//       try {
//         const response = await client.fetch(SEARCH_QUERY, {term})
//         setSearchResults(response)
//         console.log('Search results:', response)
//       } catch (error) {
//         console.error('Error fetching search results:', error)
//         // Handle error (e.g., display an error message to the user)
//       }
//     } else {
//       setSearchResults([])
//     }
//   }, 300)

//   return (
//     <div className='relative'>
//       <div className='flex items-center space-x-2 rounded-md border p-2'>
//         <label htmlFor='search' className='sr-only'>
//           Search
//         </label>
//         <input
//           id='search'
//           className='w-40 appearance-none bg-base-100 outline-none sm:w-auto'
//           placeholder={placeholder}
//           onChange={(e) => {
//             handleSearch(e.target.value)
//           }}
//           defaultValue={searchParams.get('query')?.toString()}
//         />
//         <CiSearch className='size-4 flex-none' />
//       </div>
//       {searchResults.length > 0 && (
//         <div className='z-1000 absolute left-0 top-full mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-white text-red-500 shadow-lg'>
//           {searchResults.map((result) => (
//             <div key={result._id} className='p-4 hover:bg-gray-100'>
//               <Link href={`/blog/post/${result.slug.current}`}>{result.title}</Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }
