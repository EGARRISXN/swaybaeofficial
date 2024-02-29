import Link from 'next/link'

export default function TagBadge({tag, clickable = true}) {
  const tagContent = (
    <span
      className='line-clamp-1 inline-flex items-center rounded-full border-transparent px-1.5 py-1 text-xs font-semibold tracking-tight text-slate-800 transition-all duration-300 ease-out hover:scale-105 hover:text-slate-900 focus:outline-none '
      style={{backgroundColor: tag.color}}
    >
      {tag.title}
    </span>
  )
  return clickable ? <Link href={`/blog/tag/${tag.tagSlug}`}>{tagContent}</Link> : tagContent
}
