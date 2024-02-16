import SearchBar from '@/components/(blog)/SearchBar'
import PageName from '@/components/(ui)/PageName'
import BlogList from '@/components/(blog)/BlogList'
import {client} from '@/utils/client'

const query = `
    *[_type == 'post'] | order(_createdAt desc) {
      _id,
      _createdAt,
      'postSlug': slug.current,
      title,
      excerpt,
      coverImage {
        'image': asset->url,
        alt,
      },
      'tags': tags[]->{
        _id,
        'tagSlug': slug.current,
        title,
        color,
      },
    }`

export default async function BlogPage() {
  const posts = await client.fetch(query)

  return (
    <main>
      <p className='hidden'>Blog Page</p>
      <div id='BlogPage' className='w-full'>
        <div className='mx-auto max-w-7xl pb-16 pt-4 lg:pt-16'>
          <SearchBar />
          <PageName>Blog</PageName>
          <BlogList posts={posts} />
        </div>
      </div>
    </main>
  )
}
