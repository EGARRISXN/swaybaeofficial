import Link from 'next/link'

export default function CategoryLabel({category}) {
  return (
    <div className='flex gap-3'>
      {category?.length &&
        category.slice(0).map((category, index) => (
          <Link href={`/category/${category.slug.current}`} key={index}>
            <div
              className='inline-block text-xs font-medium uppercase tracking-wider'
              style={{color: category.color}}
            >
              {category.title}
            </div>
          </Link>
        ))}
    </div>
  )
}
