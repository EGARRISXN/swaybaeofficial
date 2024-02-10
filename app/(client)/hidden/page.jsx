import Image from 'next/image'
import Link from 'next/link'
import PageName from '@/app/components/(ui)/PageName'
import MyButton from '@/app/components/(ui)/MyButton'

import {client, urlFor} from '@/sanity/lib/sanityClient'

export const revalidate = 60

async function getData() {
  const allBlogsQuery = `
 *[_type == 'blog'] | order(_createdAt desc) {
    "currentSlug": slug.current,
    title,
    coverImage,
    description,
    category[]->{
      "slug": slug.current,
      title,
      color,
    },
  }`

  const allBlogsData = await client.fetch(allBlogsQuery)
  return allBlogsData
}

export default async function Blog() {
  const allBlogsData = await getData()

  return (
    <main className='mt-5'>
      <h1 className='hidden'>Blog</h1>
      <div id='Blog' className='w-full'>
        <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
          <PageName>Blog</PageName>
          <br />
          <div className='mx-auto mt-4 grid max-w-5xl grid-cols-1 place-items-center gap-20 px-4 md:grid-cols-2 md:gap-8 lg:mt-16 lg:gap-10 xl:gap-12 2xl:gap-14'>
            {allBlogsData.map((blog, idx) => (
              <div key={idx}>
                <Image
                  src={urlFor(blog.coverImage).url()}
                  alt='Blog Image'
                  width={1120}
                  height={630}
                  priority
                  className='mx-auto rounded-lg border object-cover'
                />
                <div className='my-4 flex'>
                  {blog.category.map((category, idx) => (
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
                <div className='my-4'>
                  <h4 className='prose prose-lg line-clamp-1 font-bold tracking-tight dark:prose-invert'>
                    {blog.title}
                  </h4>
                  <p className='prose prose-sm mt-2 line-clamp-1 tracking-tight dark:prose-invert'>
                    {blog.description}
                  </p>
                </div>
                <div className='mx-auto flex items-center justify-center'>
                  <MyButton>
                    <Link href={`/hidden/${blog.currentSlug}`}>Read More</Link>
                  </MyButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
