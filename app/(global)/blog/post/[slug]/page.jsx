import {draftMode} from 'next/headers'
import {loadQuery} from '@/sanity/lib/store'
import {POSTS_QUERY, POST_QUERY} from '@/sanity/lib/queries'
import Post from '@/components/(blog)/Post'
import PostPreview from '@/components/(blog)/Post-Preview'
import {client} from '@/sanity/lib/client'

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY)

  return posts.map((post) => ({
    slug: post.postSlug,
  }))
}

export default async function PostPage({params}) {
  const initial = await loadQuery(POST_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
  })

  return draftMode().isEnabled ? (
    <PostPreview initial={initial} params={params} />
  ) : (
    <Post post={initial.data} />
  )
}
