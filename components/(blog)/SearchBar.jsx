'use client'
import {useState, useEffect} from 'react'
import {client} from '@/sanity/lib/client'
import debounce from 'lodash.debounce'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const fetchData = async (searchTerm) => {
    try {
      const response = await client.fetch(
        `
        *[_type == 'post' && (
          title match $searchTerm ||
          excerpt match $searchTerm ||
          tags[]->title match $searchTerm ||
          content[].children[].text match $searchTerm
        )] {
          _id,
          title,
          excerpt,
          publishedAt,
          'tags': tags[]->{
            title
          }
        } | order(publishedAt desc)
      `,
        {searchTerm: `*${searchTerm}*`},
      )
      setSearchResults(response)
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  const debouncedFetchData = debounce(fetchData, 300)

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      debouncedFetchData(searchTerm.trim())
    } else {
      setSearchResults([])
    }
    return () => {
      debouncedFetchData.cancel()
    }
  }, [searchTerm, debouncedFetchData])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full max-w-md'>
        <div className='flex'>
          <input
            type='text'
            value={searchTerm}
            onChange={handleSearch}
            className='w-full px-4 py-2 text-sm focus:outline-none'
            placeholder='Search blog...'
            style={{border: '2px solid #e5e7eb'}}
          />
          <button className='ml-2 flex items-center justify-center bg-gray-300 px-4'>
            <svg
              className='h-4 w-4 text-gray-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {searchResults.map((post) => (
          <div key={post._id} className='mt-4 border-2'>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <p>{post.publishedAt}</p>
            <ul>
              {post.tags.map((tag, idx) => (
                <li key={idx}>{tag.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
