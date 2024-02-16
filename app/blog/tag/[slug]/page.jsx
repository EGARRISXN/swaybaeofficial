import Link from 'next/link'
import Image from 'next/image'
import PageName from '@/components/(ui)/PageName'
import MyButton from '@/components/(ui)/MyButton'
// import SearchBar from '@/components/(blog)/SearchBar'
import {client} from '@/utils/client'

async function getData(slug) {
  const query = `
    *[_type == 'tag' && slug.current == '${slug}'] {
      _id,
      title,
      color,
      'posts': *[_type == 'post' && references(^._id)] {
        _id,
        'postSlug': slug.current,
        title,
        coverImage {
        "image": asset->url,
        alt,
        },
        excerpt,
        publishedAt,
        'tags': tags[]->{
          _id,
          'tagSlug': slug.current,
          title,
          color,
        }, 
      },
    }[0]`

  const data = await client.fetch(query)
  return data
}

export default async function TagSlug({params}) {
  const {slug} = params
  const data = await getData(slug)

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <main className='x'>
      <p className='hidden'>Tag Slug</p>
      <div id='TagSlug' className='w-full'>
        <div className='mx-auto max-w-7xl pb-16 pt-4 lg:pt-16'>
          {/* <SearchBar /> */}
          <PageName>
            <Link href='/blog' className='text-primary hover:underline hover:underline-offset-4'>
              ← Back
            </Link>
          </PageName>
          <br />
          <div className='my-4 flex'>
            <div className='mb-2 mr-2 inline-block'>
              <div
                style={{backgroundColor: data.color}}
                className='mx-auto line-clamp-1 cursor-pointer justify-center rounded-full px-3 py-1 text-center text-xs font-semibold dark:prose-invert'
              >
                <Link href='/blog/tags'>{data.title}</Link>
              </div>
            </div>
          </div>
          <div className='mx-auto mt-4 grid max-w-5xl grid-cols-1 place-items-center gap-20 px-4 md:grid-cols-2 md:gap-8 lg:mt-16 lg:gap-10 xl:gap-12 2xl:gap-14'>
            {data.posts.map((post, index) => (
              <div key={index} className='overflow-hidden bg-white shadow sm:rounded-lg'>
                <Image
                  src={post.coverImage.image}
                  alt={post.coverImage.alt}
                  width={1120}
                  height={630}
                  priority
                  className='mx-auto rounded-lg border object-cover'
                />
                <div className='my-4 flex'>
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className='mb-2 mr-2 inline-block'>
                      <div
                        style={{backgroundColor: tag.color}}
                        className='mx-auto line-clamp-1 cursor-pointer justify-center rounded-full px-3 py-1 text-center text-xs font-semibold dark:prose-invert'
                      >
                        <Link href={`/blog/tag/${tag.tagSlug}`}>{tag.title}</Link>
                      </div>
                    </span>
                  ))}
                </div>
                <h4 className='prose prose-lg line-clamp-1 font-bold tracking-tight dark:prose-invert'>
                  {post.title}
                </h4>
                <div className='bg-gray-50 px-4 py-4'>
                  <Link href={`/blog/post/${post.postSlug}`}>
                    <div className='hover:text-primary-dark text-primary'>Read more</div>
                  </Link>
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
