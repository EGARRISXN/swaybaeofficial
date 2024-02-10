import Image from 'next/image'
import Link from 'next/link'
import PageName from '@/app/components/(ui)/PageName'
import MyButton from '@/app/components/(ui)/MyButton'

import Body from '@/app/components/(blog)/Body'

import {client, urlFor} from '@/sanity/lib/sanityClient'

export const revalidate = 60

async function getData(slug) {
  const singleBlogQuery = `
    *[_type == 'blog' && slug.current == '${slug}'] {
      "currentSlug": slug.current,
      title,
      coverImage,
      body,
      category[]->{
        "slug": slug.current,
        title,
        color,
      },
    }[0]`

  const singleBlogData = await client.fetch(singleBlogQuery)
  return singleBlogData
}

export default async function singleBlog({params}) {
  const singleBlogData = await getData(params.slug)

  return (
    <main className='mt-5'>
      <h1 className='hidden'>Blog Slug</h1>
      <div id='singleBlog' className='w-full'>
        <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
          <PageName>
            <Link href='/hidden' className='text-primary hover:underline hover:underline-offset-4'>
              ←Back
            </Link>
          </PageName>
          <br />
          <div className='mx-auto grid max-w-5xl grid-cols-1 place-items-center px-4'>
            <Image
              src={urlFor(singleBlogData.coverImage).url()}
              alt='Blog Post Image'
              width={1120}
              height={630}
              priority
              className='mx-auto mt-8 w-[900px] rounded-lg border object-cover'
            />
            <div className='my-4 flex'>
              {singleBlogData.category.map((category, idx) => (
                <div key={idx} className='mb-2 mr-2 inline-block'>
                  <div
                    style={{backgroundColor: category.color}}
                    className='mx-auto line-clamp-1 cursor-pointer justify-center rounded-full px-3 py-1 text-center text-xs font-semibold dark:prose-invert'
                  >
                    <Link href={`/category/${category.slug}`}>{category.title}</Link>
                  </div>
                </div>
              ))}
            </div>
            <h2 className='prose prose-lg prose-slate mt-2 text-center text-xl leading-8 tracking-tight dark:prose-invert lg:text-3xl'>
              {singleBlogData.title}
            </h2>
            <div className='prose prose-lg prose-blue mt-12 dark:prose-invert lg:prose-xl prose-a:text-primary prose-li:marker:text-primary'>
              <Body />
            </div>
            <div className='mx-auto mt-8 flex items-center justify-center'>
              <MyButton>
                <Link href='/hidden'>Return</Link>
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
