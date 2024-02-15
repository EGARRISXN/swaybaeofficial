import Image from 'next/image'
import Link from 'next/link'
import MyButton from '@/components/(ui)/MyButton'
import {urlFor} from '@/sanity/lib/image'
import {PortableText} from '@portabletext/react'
import {PortableTextComponents} from '@/components/(blog)/PortableTextComponents'

export default function SlugCard({data}) {
  return (
    <div className='mx-auto mt-8 flex max-w-5xl flex-col items-center justify-center px-4'>
      <Image
        src={urlFor(data.coverImage.image).fit('max').auto('format').url()}
        alt={data.coverImage.alt}
        width={800}
        height={800}
        priority
        className='rounded-lg border object-cover object-center'
      />
      <div className='my-4 flex'>
        {data.tags.map((tag, idx) => (
          <div key={idx} className='mb-2 mr-2 inline-block'>
            <div
              style={{backgroundColor: tag.color}}
              className='mx-auto line-clamp-1 cursor-pointer justify-center rounded-full px-3 py-1 text-center text-xs font-semibold dark:prose-invert'
            >
              <Link href={`/blog/tag/${tag.tagSlug}`}>{tag.title}</Link>
            </div>
          </div>
        ))}
      </div>
      <h2 className='prose prose-lg prose-slate mt-2 text-center text-xl leading-8 tracking-tight dark:prose-invert lg:text-3xl'>
        {data.title}
      </h2>
      <hr className='mt-8 h-2 w-full border-4 border-pink-500 bg-pink-500' />
      <div className='prose prose-lg prose-blue mt-12 dark:prose-invert lg:prose-xl prose-a:text-primary prose-li:marker:text-primary'>
        <PortableText value={data.content} components={PortableTextComponents} />
      </div>
      <hr className='mt-8 h-2 w-full border-4 border-pink-500 bg-pink-500' />
      <div className='mx-auto mt-8 flex items-center justify-center'>
        <Link href='/blog'>
          <MyButton value={'Return'} />
        </Link>
      </div>
    </div>
  )
}
