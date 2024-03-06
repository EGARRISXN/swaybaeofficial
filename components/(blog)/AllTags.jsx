import Link from 'next/link'

export default function AllTags({tags}) {
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
    <>
      <div className='my-4 flex'>
        {allTags.map((tag) => (
          <div key={tag._id} className='mb-2 mr-2 inline-block'>
            <div
              style={{backgroundColor: tag.color}}
              className='mx-auto line-clamp-1 cursor-pointer justify-center rounded-full px-3 py-1 text-center text-xs font-semibold dark:prose-invert'
            >
              <Link href={`/blog/tag/${tag.tagSlug}`}>{tag.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
