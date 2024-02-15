// 'use client'
// import {useRef} from 'react'
// import {useSearchParams, usePathname, useRouter} from 'next/navigation'
// import debounce from 'lodash.debounce'
// import {client} from '@/sanity/lib/client'

// export default function NextSearch() {
//   const [searchResults, setSearchResults] = useSearchParams([])
//   const pathname = usePathname()
//   const {replace} = useRouter()

//   const fetchData = async (searchTerm) => {
//     try {
//       const response = await client.fetch(
//         `
//         *[_type == 'post' && (
//           title match $searchTerm ||
//           excerpt match $searchTerm ||
//           tags[]->title match $searchTerm ||
//           test[].children[].text match $searchTerm
//         )] {
//           _id,
//           title,
//           excerpt,
//           publishedAt,
//           'tags': tags[]->{
//             title
//           }
//         } | order(publishedAt desc)
//       `,
//         {searchTerm: `*${searchTerm}*`},
//       )

//       setSearchResults(response)
//     } catch (error) {
//       console.error('Error fetching search results:', error)
//       // Handle error gracefully, e.g., display a message to the user
//     }
//   }

//   const debouncedFetchData = useRef(debounce(fetchData, 300)).current

//   const handleSearch = (term) => {
//     const params = new URLSearchParams()
//     if (term.trim() !== '') {
//       params.set('query', term.trim())
//     } else {
//       params.delete('query')
//     }
//     replace(`${pathname}?${params.toString()}`)
//   }

//   return (
//     <div className='flex flex-col items-center justify-center py-2'>
//       <div className='w-full max-w-md'>
//         <div className='mt-10 flex rounded-lg border-2 border-gray-300'>
//           <input
//             type='text'
//             onChange={(e) => handleSearch(e.target.value)}
//             className='w-full px-4 py-2 text-sm focus:outline-none'
//             placeholder='Search blog...'
//           />
//           <button className='flex items-center justify-center bg-gray-300 px-4'>
//             <svg
//               className='h-6 w-6 text-gray-500'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth={2}
//                 d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//       {searchResults.map((post) => (
//         <div key={post._id} className='mt-10 text-xl'>
//           <h3>{post.title}</h3>
//           <p>{post.excerpt}</p>
//           <p>{post.publishedAt}</p>
//           <ul>
//             {post.tags.map((tag, idx) => (
//               <li key={idx}>{tag.title}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   )
// }
