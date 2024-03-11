import Link from 'next/link'
import {TbAdjustmentsSearch} from 'react-icons/tb'

export default function TagFilter({tags}) {
  const allTags = tags.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      const existingTag = acc.find((t) => t._id === tag._id)
      if (existingTag) {
        existingTag.count += 1
      } else {
        acc.push({
          _id: tag._id,
          title: tag.title,
          tagSlug: tag.tagSlug,
          count: 1,
          color: tag.color,
        })
      }
    })
    return acc
  }, [])

  return (
    <div className='dropdown dropdown-end dropdown-bottom dropdown-hover'>
      <div
        tabIndex={0}
        role='button'
        className='btn-circle z-30 flex h-10 w-10 items-center justify-center border bg-light p-2 text-center dark:bg-dark'
      >
        <TbAdjustmentsSearch />
      </div>
      <ul
        tabIndex={0}
        className='menu dropdown-content z-30 mt-1 w-44 rounded-md border bg-light p-2 text-sm font-semibold tracking-tight dark:bg-dark'
      >
        Filter by Tag:
        {allTags.map((tag) => (
          <li key={tag._id}>
            <div
              style={{backgroundColor: tag.color}}
              className='transiton-colors line-clamp-1 inline-flex w-40 items-center justify-start rounded-none border-transparent text-dark duration-200 ease-in hover:text-light'
            >
              <Link href={`/blog/tag/${tag.tagSlug}`}>{tag.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
