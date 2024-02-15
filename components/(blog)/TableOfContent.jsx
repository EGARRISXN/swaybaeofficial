import Link from 'next/link'

export default function TableOfContent({headings}) {
  return (
    <nav className='fixed left-24 top-80 w-60 border-2 p-4'>
      <h2 className='my-2 text-center font-bold underline'>Table of Content</h2>
      <ul className='gap-2 text-secondary'>
        {headings.map((heading) => (
          <li key={heading._key}>
            <Link href={`#${heading._key}`}>
              {heading.children.map((child) => child.text).join(' ')}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
