import Link from 'next/link'
import Image from 'next/image'
import TagBadge from './(tag)/TagBadge'
import {urlFor} from '@/sanity/lib/image'

export default function FeaturedCard({post}) {
  const {coverImage, title, tags, excerpt} = post
  return (
    <article>
      <label className='sr-only'>Featured Card</label>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8'>
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
        <section className='flex flex-col gap-4 md:p-1'>
          <div className='hidden justify-between md:flex'>
            <p className='prose prose-sm line-clamp-1 w-fit rounded-md bg-slate-700 px-2 tracking-tight text-white drop-shadow-lg  dark:prose-invert'>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
            <div className='flex gap-1'>
              {tags.map((tag) => (
                <div key={tag._id}>
                  <TagBadge tag={tag} />
                </div>
              ))}
            </div>
          </div>
          <div className='mt-2 space-y-4 md:ml-1 md:mt-4'>
            <Link href={`/blog/post/${post.postSlug}`}>
              <h3 className='prose prose-lg prose-slate line-clamp-2 font-bold md:prose-xl dark:prose-invert hover:underline '>
                {title}
              </h3>
            </Link>
            <h4 className='prose prose-base prose-slate line-clamp-3 text-gray-500 md:prose-lg dark:prose-invert'>
              {excerpt}
            </h4>
            <Link href={`/blog/post/${post.postSlug}`}>
              <p className='mt-4 font-bold text-[#00ceff] hover:font-extrabold'>Read Post&#8594;</p>
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}
