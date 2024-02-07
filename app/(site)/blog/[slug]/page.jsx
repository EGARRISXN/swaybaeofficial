import Image from 'next/image'
import Link from 'next/link'
import {client, urlFor} from '@/utils//sanityClient'
import {PortableText} from '@portabletext/react'
import PageName from '@/components/(ui)/PageName'
import MyButton from '@/components/(ui)/MyButton'

export const revalidate = 60

async function getData(slug) {
  const query = `
*[_type == 'blog' && slug.current == '${slug}'] {
  "currentSlug": slug.current,
    title,
    content,
    coverImage
}[0]`

  const data = await client.fetch(query)
  return data
}

export default async function BlogPost({params}) {
  const data = await getData(params.slug)

  return (
    <main className='mt-5'>
      <h1 className='hidden'>Blog Post</h1>
      <div id='blogpost' className='w-full'>
        <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
          <PageName>
            <Link href='/blog' className='text-primary hover:underline hover:underline-offset-4'>
              ←Back
            </Link>
          </PageName>
          <br />
          <div className='mx-auto grid max-w-5xl grid-cols-1 place-items-center px-4'>
            <h2 className='prose prose-lg prose-slate mt-2 text-center text-xl leading-8 tracking-tight dark:prose-invert lg:text-3xl'>
              {data.title}
            </h2>
            <Image
              src={urlFor(data.coverImage).url()}
              alt='Blog Post Image'
              width={1120}
              height={630}
              priority
              className='mx-auto mt-8 w-[900px] rounded-lg border object-cover'
            />

            <div className='prose prose-lg prose-blue mt-12 dark:prose-invert lg:prose-xl prose-a:text-primary prose-li:marker:text-primary'>
              <PortableText value={data.content} />
            </div>
            <div className='mx-auto mt-8 flex items-center justify-center'>
              <MyButton>
                <Link href='/blog'>Return</Link>
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
