import Link from 'next/link'
import Image from 'next/image'
import TagBadge from './TagBadge'
import {urlFor} from '@/sanity/lib/image'

export default function TagCard({post}) {
  const {coverImage, title, tags, excerpt} = post
  return (
    <article>
      <h1 className='hidden'>Tag Card</h1>
      <div
        id='TagCard'
        className='grid grid-cols-1 gap-4 rounded-md border-2 p-6 shadow-lg md:grid-cols-2 md:p-2 lg:gap-6'
      >
        <section className='drop-shadow-xl transition-transform duration-200 ease-out hover:scale-105 md:p-4'>
          <Link href={`/blog/post/${post.postSlug}`}>
            <Image
              className='rounded border bg-white object-cover object-center p-2 shadow-xl'
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt}
              width={600}
              height={200}
              loading='lazy'
              placeholder='blur'
              blurDataURL={urlFor(coverImage.image).width(24).height(24).blur(10).url()}
            />
          </Link>
        </section>
        <section className='grid grid-cols-1 place-content-between md:p-4'>
          <div className='mb-1 mt-2 md:mb-0'>
            <div className='flex items-center justify-between'>
              <p className='prose prose-sm line-clamp-1 w-fit rounded-sm bg-slate-700 px-2 tracking-tight text-white drop-shadow-lg lg:prose-base dark:prose-invert'>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <Link href={`/blog/post/${post.postSlug}`}>
                <h5 className='font-bold text-[#00ceff]'>Read Post &#8594;</h5>
              </Link>
            </div>
            <div className='mb-4 mt-4 lg:mb-0 lg:ml-1 lg:mt-6'>
              <Link href={`/blog/post/${post.postSlug}`}>
                <h3 className='prose prose-lg prose-slate line-clamp-2 font-bold lg:prose-2xl dark:prose-invert hover:underline md:mb-2'>
                  {title}
                </h3>
                <h4 className='prose prose-base prose-slate line-clamp-2 text-gray-500 lg:prose-lg dark:prose-invert '>
                  {excerpt}
                </h4>
              </Link>
            </div>
          </div>
          <div className='flex justify-end gap-1'>
            {tags.map((tag, idx) => (
              <div key={idx}>
                <TagBadge tag={tag} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}
