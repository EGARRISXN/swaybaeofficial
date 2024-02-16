import Link from 'next/link'
import PageName from '@/components/(ui)/PageName'
import MyButton from '@/components/(ui)/MyButton'
// import SearchBar from '@/components/(blog)/SearchBar'
import {client} from '@/utils/client'

async function getData() {
  const query = `
    *[_type == 'tag'] | order(_createdAt desc) {
      _id,
      'tagSlug': slug.current,
      title,
      color,
      'posts': *[_type == 'post' && references(^._id)] {
        _id,
        'postSlug': slug.current,
        title,
        excerpt,
        publishedAt,
      }
    }`

  const data = await client.fetch(query)
  return data
}

export default async function TagsPage() {
  const data = await getData()

  return (
    <main className='x'>
      <p className='hidden'>Blog Page</p>
      <div id='TagsPage' className='h-full'>
        <div className='mx-auto max-w-7xl pb-16 pt-4 lg:pt-16'>
          {/* <SearchBar /> */}
          <PageName>Tags</PageName>
          <br />
          <div className='my-4 flex'>
            {data.map((tag, idx) => (
              <div key={idx} className='mb-2 mr-2 inline-block'>
                <div
                  style={{backgroundColor: tag.color}}
                  className='mx-auto line-clamp-1 cursor-pointer justify-center rounded-full px-3 py-1 text-center text-xs font-semibold dark:prose-invert'
                >
                  <Link href={`/blog/tag/${tag.tagSlug}`}>{tag.title}</Link>
                </div>
                <div>
                  {tag.posts.map((post, idx) => (
                    <div key={idx} className='mb-2 mr-2 inline-block'>
                      <Link href={`/blog/post/${post.postSlug}`}>
                        <div className='flex flex-col'>
                          {post.title}
                          <br />
                          {post.excerpt}
                          <br />
                          {post.publishedAt}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className='mx-auto mt-8 flex items-center justify-center'>
            <Link href='/blog'>
              <MyButton value={'Return'} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
