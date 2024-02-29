import Link from 'next/link'
import Image from 'next/image'
import TagBadge from './TagBadge'
import {urlFor} from '@/sanity/lib/image'

export default function PostCard({post}) {
  const {coverImage, title, tags, excerpt} = post
  return (
    <article>
      <h1 className='hidden'>Post Card</h1>
      <div id='PostCard' className='grid grid-cols-1 gap-2 md:gap-3'>
        <section>
          <p className='prose prose-sm line-clamp-1 w-fit rounded-md bg-slate-700 px-2 tracking-tight text-white drop-shadow-lg  dark:prose-invert'>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </section>
        <section className='drop-shadow-xl transition-transform duration-200 ease-out hover:scale-105'>
          <Link href={`/blog/post/${post.postSlug}`}>
            <Image
              className='rounded border bg-white object-cover object-center p-2 shadow-xl'
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt}
              width={800}
              height={450}
              loading='lazy'
              placeholder='blur'
              blurDataURL={urlFor(coverImage.image).width(24).height(24).blur(10).url()}
            />
          </Link>
        </section>
        <section>
          <div className='flex justify-end gap-1'>
            {tags.map((tag, idx) => (
              <div key={idx}>
                <TagBadge tag={tag} />
              </div>
            ))}
          </div>
        </section>
        <section className='mt-2 md:ml-1'>
          <Link href={`/blog/post/${post.postSlug}`}>
            <h3 className='prose prose-base prose-slate line-clamp-2 font-bold md:prose-lg dark:prose-invert hover:underline'>
              {title}
            </h3>
          </Link>
          <h4 className='prose prose-sm prose-slate line-clamp-3 text-gray-500 md:prose-base dark:prose-invert'>
            {excerpt}
          </h4>
          <Link href={`/blog/post/${post.postSlug}`}>
            <p className='mt-4 font-bold text-[#00ceff] hover:font-extrabold'>Read Post &#8594;</p>
          </Link>
        </section>
      </div>
    </article>
  )
}
