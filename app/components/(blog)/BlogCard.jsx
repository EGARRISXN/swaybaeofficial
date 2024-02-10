// import Image from 'next/image'
// import Link from 'next/link'
// import {urlFor} from '@/sanity/lib/sanityClient'

// export default function BlogCard({blog}) {
//   return (
//     <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
//       <Image
//         src={urlFor(blog.coverImage).url()}
//         alt='Blog Image'
//         width={1120}
//         height={630}
//         priority
//         className='mx-auto rounded-lg border object-cover'
//       />
//       <div className='my-4 flex'>
//         {blog.category.map((category, index) => (
//           <span key={index} className='mb-2 mr-2 inline-block'>
//             <Link href={`/category/${category.slug}`}>
//               <div className='mx-auto cursor-pointer justify-center rounded-full bg-gray-200 px-3 py-1 text-center text-xs font-semibold text-gray-800 transition duration-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'>
//                 {category.title}
//               </div>
//             </Link>
//           </span>
//         ))}
//       </div>
//       <div className='my-4'>
//         <h4 className='prose prose-lg line-clamp-1 font-bold tracking-tight dark:prose-invert'>
//           {blog.title}
//         </h4>
//         <p className='prose prose-sm mt-2 line-clamp-1 tracking-tight dark:prose-invert'>
//           {blog.description}
//         </p>
//       </div>
//       <div className='mx-auto flex items-center justify-center'>
//         <MyButton>
//           <Link href={`/hidden/${blog.currentSlug}`}>Read More</Link>
//         </MyButton>
//       </div>
//     </div>
//   )
// }
