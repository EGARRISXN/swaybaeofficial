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
        console.log('Search term:', term)
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
    console.log('Input value:', value)
    console.log('Input length:', value.length)
    setSearchTerm(value)
    if (value.length >= 3) {
      handleSearch(value)
    } else {
      setSearchResults([])
    }
  }

  return (
    <div className='relative'>
      <div className='flex items-center space-x-2 rounded-md border bg-light p-2 dark:bg-dark'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          id='search'
          className='w-40 appearance-none bg-light outline-none sm:w-auto dark:bg-dark'
          placeholder={placeholder}
          onChange={handleChange}
          value={searchTerm}
        />
        <CiSearch className='size-4 flex-none' />
      </div>
      {searchResults.length > 0 && (
        <div className='absolute left-0 top-full z-30 mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-light p-2 text-sm font-semibold tracking-tight dark:bg-dark'>
          Results:
          {searchResults.map((result) => (
            <div
              key={result._id}
              className='line-clamp-1 inline-flex w-full items-center justify-start p-2 transition-colors duration-200 ease-in hover:text-primary'
            >
              <Link href={`/blog/post/${result.slug.current}`}>{result.title}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
