import {draftMode} from 'next/headers'
import {loadQuery} from '@/sanity/lib/store'
import {POSTS_QUERY, TAGS_QUERY} from '@/sanity/lib/queries'
import BlogPage from '@/components/(blog)/BlogPage'
import BlogPagePreview from '@/components/(blog)/BlogPage-Preview'

export default async function BlogHomePage() {
  const initial = await loadQuery(
    POSTS_QUERY,
    TAGS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
    },
  )

  return draftMode().isEnabled ? (
    <BlogPagePreview initial={initial} />
  ) : (
    <BlogPage blog={initial.data} />
  )
}
