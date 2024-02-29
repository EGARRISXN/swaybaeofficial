import Link from 'next/link'
import Image from 'next/image'
import TagBadge from './TagBadge'
import {urlFor} from '@/sanity/lib/image'

export default function FeaturedCard({post}) {
  const {coverImage, title, tags, excerpt} = post
  return (
    <article>
      <h1 className='hidden'>Featured Card</h1>
      <div id='featuredCard' className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8'>
        <section className='drop-shadow-xl transition-all duration-300 ease-out hover:scale-105'>
          <Link href={`/blog/post/${post.postSlug}`}>
            <Image
              className='rounded border bg-white object-cover object-center p-2 shadow-xl'
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt}
              width={1000}
              height={400}
              priority
            />
          </Link>
        </section>
        <section className='flex flex-col gap-4'>
          <div className='hidden gap-1 md:flex'>
            {tags.map((tag, idx) => (
              <div key={idx}>
                <TagBadge tag={tag} />
              </div>
            ))}
          </div>
          <Link href={`/blog/post/${post.postSlug}`}>
            <h3 className='prose prose-lg prose-slate line-clamp-2 font-bold md:prose-xl dark:prose-invert hover:underline md:ml-1'>
              {title}
            </h3>
          </Link>
          <h4 className='prose prose-base prose-slate line-clamp-3 text-gray-500 md:prose-lg dark:prose-invert md:ml-1'>
            {excerpt}
          </h4>
          <p className='font-bold text-[#00ceff] hover:font-extrabold md:ml-1'>
            <Link href={`/blog/post/${post.postSlug}`}>Read Post &#8594;</Link>
          </p>
        </section>
      </div>
    </article>
  )
}
