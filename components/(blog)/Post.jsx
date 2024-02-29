import Link from 'next/link'
import Image from 'next/image'
import PageName from '../(other)/PageName'
import SearchBar from './SearchBar'
import TagBadge from './TagBadge'
import BlogBody from './BlogBody'
import {urlFor} from '@/sanity/lib/image'

export default function Post({post}) {
  const {title, coverImage, tags, content} = post

  return (
    <main className='mt-5'>
      <h1 className='hidden'>Post</h1>
      <div id='Post' className='w-full px-4'>
        <header className='mx-auto flex max-w-6xl items-center justify-between pt-4 lg:pt-16'>
          <Link href='/blog'>
            <PageName>&#8592; Back</PageName>
          </Link>
          <SearchBar />
        </header>
        <br />
        <article className='mx-auto my-4 grid max-w-5xl grid-cols-1 gap-2 px-4 lg:mt-16 lg:gap-4'>
          <section>
            <p className='prose prose-sm line-clamp-1 block w-fit rounded-md bg-slate-700 px-2 tracking-tight text-white drop-shadow-lg dark:prose-invert md:hidden'>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </section>
          <section>
            <Image
              className='rounded border bg-white object-cover object-center p-2 shadow-xl'
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt}
              width={1000}
              height={300}
              priority
            />
          </section>
          <section className='flex justify-end md:justify-between'>
            <p className='prose prose-base line-clamp-1 hidden w-fit rounded-md bg-slate-700 px-2 tracking-tight text-white drop-shadow-lg dark:prose-invert md:flex'>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
            <div className='flex gap-1'>
              {tags.map((tag, idx) => (
                <div key={idx}>
                  <TagBadge tag={tag} />
                </div>
              ))}
            </div>
          </section>
          <section className='container mx-auto pb-4 pt-8'>
            <h2 className='prose prose-2xl prose-slate my-4 text-3xl font-bold leading-8 tracking-tight dark:prose-invert md:text-5xl'>
              {title}
            </h2>
            <hr className='my-4 border' />
            <div className='prose prose-slate md:prose-base lg:prose-lg xl:prose-xl dark:prose-invert prose-h1:font-extrabold prose-h1:text-primary prose-h2:font-bold prose-h2:text-cyan-700 prose-h3:font-semibold prose-h3:text-cyan-600 prose-h4:font-medium prose-h4:text-cyan-500 prose-p:tracking-tighter prose-a:text-sky-500 prose-a:transition-colors prose-a:duration-300 hover:prose-a:text-pink-400 prose-blockquote:border-pink-500 prose-blockquote:font-light prose-blockquote:text-base-content prose-strong:text-base-content prose-code:text-pink-600 prose-ol:list-inside prose-ul:list-inside prose-li:text-pink-600 prose-li:marker:text-sky-500 prose-th:bg-emerald-300 prose-th:text-xl prose-td:text-base-content prose-img:w-full prose-img:rounded prose-img:border prose-img:bg-white prose-img:p-2 prose-img:shadow-xl'>
              <BlogBody content={content} />
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
