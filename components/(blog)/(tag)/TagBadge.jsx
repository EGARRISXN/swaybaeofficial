import Link from 'next/link'

export default function TagBadge({tag, clickable = true}) {
  const {title, color} = tag

  const tagContent = (
    <span
      className='line-clamp-1 inline-flex items-center rounded-full border-transparent px-2 py-1 text-xs font-semibold tracking-tight text-dark shadow-md  ease-in focus:outline-none'
      style={{
        backgroundColor: color,
      }}
    >
      {title}
    </span>
  )
  return clickable ? <Link href={`/blog/tag/${tag.tagSlug}`}>{tagContent}</Link> : tagContent
}
