// import Link from 'next/link'
// import Image from 'next/image'
// import {urlFor} from '@/sanity/lib/sanityClient'
// import PageName from '@/app/components/(ui)/PageName'
// import MyButton from '@/app/components/(ui)/MyButton'

// export default function BlogsByCategory({category, blogs}) {
//   if (!category) {
//     return <div>Loading...</div>
//   }

//   return (
//     <main className='mt-5'>
//       <h1 className='hidden'>Category Slug</h1>
//       <div id='CategorySlug' className='w-full'>
//         <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
//           <PageName>
//             <Link href='/hidden' className='text-primary hover:underline hover:underline-offset-4'>
//               ← Back
//             </Link>
//           </PageName>
//           <br />
//           <div>
//             <div style={{color: category.color}} className='mx-auto h-32 w-32 rounded-full'>
//               <div className='mx-auto justify-center rounded-full bg-gray-200 px-3 py-1 text-center text-xs font-semibold text-gray-800 transition duration-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'>
//                 {category.title}
//               </div>
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
//                   <Link href={`/hidden/${blog.currentSlug}`}>
//                     <div className='hover:text-primary-dark text-primary'>Read more</div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className='mx-auto mt-8 flex items-center justify-center'>
//             <MyButton>
//               <Link href='/hidden'>Return</Link>
//             </MyButton>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

// import {client} from '@/sanity/lib/sanityClient'

// async function getData(slug) {
//   const query = `*[_type == "blog" && $slug in category[]->slug.current ] {  title, slug, description, coverImage, publishedAt }`

//   const data = await client.fetch(query, {$slug: slug})
//   return data
// }

// export async function BlogsByCategory({params}) {
//   const data = await getData(params.slug)
//   return {
//     props: {
//       blogs: data,
//     },
//   }
// }
