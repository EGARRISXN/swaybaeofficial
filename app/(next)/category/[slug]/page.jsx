// 'use client'
// import {useEffect, useState} from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import {client, urlFor} from '@/utils/sanityClient'
// import PageName from '@/components/(ui)/PageName'
// import MyButton from '@/components/(ui)/MyButton'

// export const revalidate = 60

// export default function CategorySlug({params}) {
//   const [category, setCategory] = useState(null)
//   const [blogs, setBlogs] = useState([])

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const {slug} = params
//         // Fetch category data
//         const categoryQuery = `
//           *[_type == 'category' && slug.current == '${slug}'] {
//             "currentSlug": slug.current,
//             title,
//             color,
//           }[0]`
//         const categoryResponse = await client.fetch(categoryQuery)
//         setCategory(categoryResponse)

//         // Fetch blogs by category
//         const blogsQuery = `
//           *[_type == 'blog' && references(*[_type == 'category' && slug.current == '${slug}']._id)] {
//             "currentSlug": slug.current,
//             title,
//             coverImage,
//             description
//           }`
//         const blogsResponse = await client.fetch(blogsQuery)
//         setBlogs(blogsResponse)
//       } catch (error) {
//         console.error('Error fetching data:', error)
//       }
//     }

//     fetchData()
//   }, [params])

//   if (!category) {
//     return <div>Loading...</div>
//   }

//   return (
//     <main className='mt-5'>
//       <h1 className='hidden'>Category Slug</h1>
//       <div id='CategorySlug' className='w-full'>
//         <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
//           <PageName>
//             <Link href='/blog' className='text-primary hover:underline hover:underline-offset-4'>
//               ← Back
//             </Link>
//           </PageName>
//           <br />
//           <div>
//             <div style={{color: category.color}} className='mx-auto h-32 w-32 rounded-full'>
//               <h4 className='prose prose-lg line-clamp-1 font-bold tracking-tight dark:prose-invert'>
//                 {category.title}
//               </h4>
//             </div>
//           </div>

//           {/* Display blogs */}
//           <div className='mx-auto mt-4 grid max-w-5xl grid-cols-1 place-items-center gap-20 px-4 md:grid-cols-2 md:gap-8 lg:mt-16 lg:gap-10 xl:gap-12 2xl:gap-14'>
//             {blogs.map((blog, index) => (
//               <div key={index} className='overflow-hidden bg-white shadow sm:rounded-lg'>
//                 <Image
//                   src={urlFor(blog.coverImage).url()}
//                   alt='Blog Image'
//                   width={1120}
//                   height={630}
//                   priority
//                   className='mx-auto rounded-lg border object-cover'
//                 />
//                 <div className='my-4'>
//                   <h4 className='prose prose-lg line-clamp-1 font-bold tracking-tight dark:prose-invert'>
//                     {blog.title}
//                   </h4>
//                   <p className='prose prose-sm mt-2 line-clamp-1 tracking-tight dark:prose-invert'>
//                     {blog.description}
//                   </p>
//                 </div>
//                 <div className='bg-gray-50 px-4 py-4'>
//                   <Link href={`/blog/${blog.currentSlug}`}>
//                     <div className='hover:text-primary-dark text-primary'>Read more</div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className='mx-auto mt-8 flex items-center justify-center'>
//             <MyButton>
//               <Link href='/blog'>Return</Link>
//             </MyButton>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

// 'use client'
// import {useEffect, useState} from 'react'
// import Link from 'next/link'
// import {client} from '@/utils/sanityClient'
// import PageName from '@/components/(ui)/PageName'
// import MyButton from '@/components/(ui)/MyButton'

// export const revalidate = 60

// export default function CategorySlug({params}) {
//   const [category, setCategory] = useState(null)
//   const [blogs, setblogs] = useState([])

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const {slug} = params
//         // Fetch category data
//         const categoryQuery = `
//           *[_type == 'category' && slug.current == '${slug}'] {
//             "currentSlug": slug.current,
//             title,
//             color,
//           }[0]`
//         const categoryResponse = await client.fetch(categoryQuery)
//         setCategory(categoryResponse)

//         // Fetch blogs by category
//         const blogsQuery = `
//           *[_type == 'blog' && '${slug}' in category[].slug.current] {
//             "currentSlug": slug.current,
//             title,
//             coverImage,
//             description
//           }`
//         const blogsResponse = await client.fetch(blogsQuery)
//         setblogs(blogsResponse)
//       } catch (error) {
//         console.error('Error fetching data:', error)
//       }
//     }

//     fetchData()
//   }, [params])

//   if (!category) {
//     return <div>Loading...</div>
//   }

//   return (
//     <main className='mt-5'>
//       <h1 className='hidden'>Category Slug</h1>
//       <div id='CategorySlug' className='w-full'>
//         <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
//           <PageName>
//             <Link href='/blog' className='text-primary hover:underline hover:underline-offset-4'>
//               ← Back
//             </Link>
//           </PageName>
//           <br />
//           <div>
//             <div style={{color: category.color}} className='mx-auto h-32 w-32 rounded-full'>
//               <h4 className='prose prose-lg line-clamp-1 font-bold tracking-tight dark:prose-invert'>
//                 {category.title}
//               </h4>
//             </div>
//           </div>
//           <div className='mx-auto mt-8 flex items-center justify-center'>
//             <MyButton>
//               <Link href='/category'>Return</Link>
//             </MyButton>
//           </div>
//           {/* Display blogs */}
//           <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
//             {blogs.map((blog, index) => (
//               <div key={index} className='overflow-hidden bg-white shadow sm:rounded-lg'>
//                 <img className='h-48 w-full object-cover' src={blog.coverImage} alt={blog.title} />
//                 <div className='px-4 py-4'>
//                   <h3 className='mb-2 text-lg font-semibold'>{blog.title}</h3>
//                   <p className='text-sm text-gray-500'>{blog.description}</p>
//                 </div>
//                 <div className='bg-gray-50 px-4 py-4'>
//                   <Link href={`/blog/${blog.currentSlug}`}>
//                     <div className='hover:text-primary-dark text-primary'>Read more</div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

/*-------------------------------------------------------------------------------------------------------*/

// import Link from 'next/link'
// import {client} from '@/utils//sanityClient'
// import PageName from '@/components/(ui)/PageName'
// import MyButton from '@/components/(ui)/MyButton'

// export const revalidate = 60

// async function getData(slug) {
//   const query = `
//     *[_type == 'category' && slug.current == '${slug}'] {
//       "currentSlug": slug.current,
//       title,
//       color,
//     }[0]`

//   const data = await client.fetch(query)
//   return data
// }

// export default async function CategorySlug({params}) {
//   const data = await getData(params.slug)

//   return (
//     <main className='mt-5'>
//       <h1 className='hidden'>Category Slug</h1>
//       <div id='CategorySlug' className='w-full'>
//         <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
//           <PageName>
//             <Link href='/blog' className='text-primary hover:underline hover:underline-offset-4'>
//               ←Back
//             </Link>
//           </PageName>
//           <br />
//           <div>
//             <div style={{color: data.color}} className='mx-auto h-32 w-32 rounded-full'>
//               <h4 className='prose prose-lg line-clamp-1 font-bold tracking-tight dark:prose-invert'>
//                 <Link href={`/category/${params.slug}/blogs`}>{data.title}</Link>
//               </h4>
//             </div>
//           </div>
//           <div className='mx-auto mt-8 flex items-center justify-center'>
//             <MyButton>
//               <Link href={'/category'}>View blogs</Link>
//             </MyButton>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

// import Link from 'next/link'
// import {client} from '@/utils//sanityClient'
// import {PortableText} from '@portabletext/react'
// import PageName from '@/components/(ui)/PageName'
// import MyButton from '@/components/(ui)/MyButton'

// export const revalidate = 60

// async function getData(slug) {
//   const query = `
// *[_type == 'category' && slug.current == '${slug}'] {
//   "currentSlug": slug.current,
//     title,
//     color,
// }[0]`

//   const data = await client.fetch(query)
//   return data
// }

// export default async function CategorySlug({params}) {
//   const data = await getData(params.slug)

//   return (
//     <main className='mt-5'>
//       <h1 className='hidden'>Category Slug</h1>
//       <div id='CategorySlug' className='w-full'>
//         <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
//           <PageName>
//             <Link href='/blog' className='text-primary hover:underline hover:underline-offset-4'>
//               ←Back
//             </Link>
//           </PageName>
//           <br />
//           <div>
//             <div style={{color: data.color}} className='mx-auto h-32 w-32 rounded-full'>
//               <h4 className='prose prose-lg line-clamp-1 font-bold tracking-tight dark:prose-invert'>
//                 {data.title}
//               </h4>
//             </div>
//           </div>
//           <div className='mx-auto mt-8 flex items-center justify-center'>
//             <MyButton>
//               <Link href='/category'>Return</Link>
//             </MyButton>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }
