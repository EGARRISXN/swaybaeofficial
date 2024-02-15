import Image from 'next/image'
import Link from 'next/link'
import {urlFor} from '@/sanity/lib/image'
import {CiLocationArrow1} from 'react-icons/ci'

export default function PostCard({post}) {
  return (
    <div className='group mt-8 flex cursor-pointer flex-col'>
      <div className='relative h-72 w-full drop-shadow-xl transition-transform duration-200 ease-out group-hover:scale-105'>
        <Link href={`/blog/post/${post.postSlug}`}>
          <Image
            className='rounded-lg object-cover object-center'
            src={urlFor(post.coverImage.image).fit('max').auto('format').url()}
            alt={post.coverImage.alt}
            fill
          />
        </Link>
        <div className='absolute bottom-0 flex w-full justify-between rounded bg-slate-950 bg-opacity-20 p-4 drop-shadow-lg backdrop-blur-lg'>
          <div>
            <p className='prose prose-lg line-clamp-1 font-bold tracking-tight text-white dark:prose-invert'>
              {post.title}
            </p>
            <p className='prose prose-sm line-clamp-1 tracking-tight text-white dark:prose-invert'>
              {new Date(post._createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
          <div className='flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2'>
            {post.tags.map((tag) => (
              <div
                key={tag._id}
                style={{backgroundColor: tag.color}}
                className='mx-auto line-clamp-1 cursor-pointer justify-center rounded-full px-3 py-1 text-center text-xs font-semibold text-base-content dark:prose-invert hover:text-base-100'
              >
                <Link href={`/blog/tag/${tag.tagSlug}`}>{tag.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='ml-1 mt-4 flex-1'>
        <p className='prose prose-lg font-bold  text-base-content underline dark:prose-invert'>
          {post.title}
        </p>
        <p className='prose line-clamp-2 text-gray-500 dark:prose-invert'>{post.excerpt}</p>
      </div>
      <p className='ml-1 mt-2 flex items-center font-bold text-base-content group-hover:underline'>
        Read Post
        <CiLocationArrow1 className='ml-2 h-4 w-4' />
      </p>
    </div>
  )
}
