import Link from 'next/link'

export default function TableOfContent({headings}) {
  return (
    <section className='z-[1000] mr-4'>
      <label className='sr-only'>Table of Content</label>
      <ol className='table-of-content'>
        {headings.map((heading, idx) => (
          <li key={idx} className='my-2.5 flex h-8 w-full items-center justify-center'>
            <Link
              href={`#${heading._key}`}
              className='table-of-content-link text-5xl text-[#ccc] hover:text-[#00ceff] active:text-[#00ceff]'
            >
              <span
                className='tooltip'
                data-tip={heading.children.map((child) => child.text).join(' ')}
              >
                &bull;
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}

// export default function TableOfContent({headings}) {
//   return (
//     <section className='w-80 rounded-lg border-2 border-slate-900 px-4 pb-12 pt-8 shadow-lg'>
//       <h5 className='mx-auto mb-6 text-center text-xl font-bold underline underline-offset-4'>
//         Navigate Quickly
//       </h5>
//       <ol className='table-of-content mx-auto flex flex-col gap-2 px-2'>
//         {headings.map((heading, idx) => (
//           <li key={idx}>
//             <Link href={`#${heading._key}`} className='table-of-content-link line-clamp-2'>
//               <span className='text-primary'>&#x2022;</span>
//               {heading.children.map((child) => child.text).join(' ')}
//             </Link>
//           </li>
//         ))}
//       </ol>
//     </section>
//   )
// }
