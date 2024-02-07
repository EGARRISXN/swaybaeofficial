import Image from 'next/image'
import Link from 'next/link'
import {client, urlFor} from '@/utils/sanityClient'
import PageName from '@/components/(ui)/PageName'
import MyButton from '@/components/(ui)/MyButton'

export const revalidate = 60

async function getData() {
  const query = `
 *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      coverImage
  }`

  const data = await client.fetch(query)
  return data
}

export default async function Blog() {
  const data = await getData()

  return (
    <main className='mt-5'>
      <h1 className='hidden'>Blog</h1>
      <div id='blog' className='w-full'>
        <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
          <PageName>Blog</PageName>
          <br />
          <div className='mx-auto mt-4 grid max-w-5xl grid-cols-1 place-items-center gap-20 px-4 md:grid-cols-2 md:gap-8 lg:mt-16 lg:gap-10 xl:gap-12 2xl:gap-14'>
            {data.map((post, idx) => (
              <div key={idx}>
                <Image
                  src={urlFor(post.coverImage).url()}
                  alt='Blog Image'
                  width={1120}
                  height={630}
                  priority
                  className='mx-auto rounded-lg border object-cover'
                />
                <div className='my-4'>
                  <h4 className='prose prose-lg line-clamp-1 font-bold tracking-tight dark:prose-invert'>
                    {post.title}
                  </h4>
                  <p className='prose prose-sm mt-2 line-clamp-1 tracking-tight dark:prose-invert'>
                    {post.smallDescription}
                  </p>
                </div>
                <div className='mx-auto flex items-center justify-center'>
                  <MyButton>
                    <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
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
