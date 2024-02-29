import {draftMode} from 'next/headers'
import Posts from '@/components/(blog)/Posts'
import PostsPreview from '@/components/(blog)/Posts-Preview'
import {loadQuery} from '@/sanity/lib/store'
import {POSTS_QUERY} from '@/sanity/lib/queries'

export default async function BlogPage() {
  const initial = await loadQuery(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
    },
  )

  return draftMode().isEnabled ? <PostsPreview initial={initial} /> : <Posts posts={initial.data} />
}
