import {draftMode} from 'next/headers'
import {loadQuery} from '@/sanity/lib/store'
import {POSTS_QUERY, POST_QUERY} from '@/sanity/lib/queries'
import PostPage from '@/components/(blog)/(post)/PostPage'
import PostPagePreview from '@/components/(blog)/(post)/PostPage-Preview'
import {client} from '@/sanity/lib/client'

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY)

  return posts.map((post) => ({
    slug: post.postSlug,
  }))
}

export default async function PostSlugPage({params}) {
  const initial = await loadQuery(POST_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
  })

  return draftMode().isEnabled ? (
    <PostPagePreview initial={initial} params={params} />
  ) : (
    <PostPage post={initial.data} />
  )
}
