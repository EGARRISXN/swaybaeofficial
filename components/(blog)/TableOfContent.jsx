import Link from 'next/link'

export default function TableOfContent({headings}) {
  return (
    <div className='hidden md:block'>
      <h2 className='my-2 font-bold underline'>Table of Content</h2>
      <ol className='gap-2'>
        {headings.map((heading, idx) => (
          <li key={idx}>
            <Link href={`#${heading._key}`}>
              {heading.children.map((child) => child.text).join(' ')}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

// <nav className='fixed right-20 top-44 w-fit rounded-lg border-2 border-slate-900 bg-white p-4 text-slate-900 shadow-lg'>
//   <h2 className='my-2 text-center font-bold underline'>Table of Content</h2>
//   <ul className='gap-2 text-center text-secondary'>
//     {headings.map((heading) => (
//       <li key={heading._key}>
//         <Link href={`#${heading._key}`}>
//           {heading.children.map((child) => child.text).join(' ')}
//         </Link>
//       </li>
//     ))}
//   </ul>
// </nav>
