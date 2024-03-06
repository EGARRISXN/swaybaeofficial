import Link from 'next/link'
import Image from 'next/image'
import PortableTextComponents from './PortableTextComponents'
import TableOfContent from './TableOfContent'
import TagBadge from '../(tag)/TagBadge'
import SearchBar from '@/components/(ui)/SearchBar'
import SocialButtons from '@/components/(ui)/SocialButtons'
import {urlFor} from '@/sanity/lib/image'

export default function PostPage({post}) {
  const {title, coverImage, tags, content, headings} = post

  return (
    <main className='mt-5'>
      <label className='sr-only'>Post</label>
      <div className='w-full px-4'>
        <header className='mx-auto flex max-w-6xl items-center justify-between pt-4 lg:px-4 lg:pt-16 xl:px-0'>
          <Link href='/blog'>
            <h1 className='font-bold-200 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-poppins text-xl uppercase tracking-widest text-transparent'>
              &#8592;Back
            </h1>
          </Link>
          <SearchBar placeholder={'Search..'} />
        </header>
        <br />
        <div className='container mx-auto mt-6 grid max-w-6xl grid-cols-1 lg:mt-16 lg:grid-cols-12'>
          <aside className='sticky top-[2rem] col-start-1 col-end-2 hidden h-screen pt-16 lg:block'>
            <TableOfContent headings={headings} />
          </aside>
          <article className='col-start-2 col-end-13 mx-auto mt-1 grid gap-2 px-0 py-4 sm:px-2 md:px-4'>
            <section>
              <h2 className='leading-8 tracking-tight'>{title}</h2>
            </section>
            <hr />
            <section className='mt-12 flex justify-between pb-2'>
              <p className='prose prose-sm line-clamp-1 w-fit rounded-md bg-slate-700 px-2 tracking-tight text-white drop-shadow-lg dark:prose-invert'>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <div className='hidden gap-1 lg:flex lg:justify-end'>
                {tags.map((tag) => (
                  <div key={tag._id}>
                    <TagBadge tag={tag} />
                  </div>
                ))}
              </div>
            </section>
            <section className='mx-auto mt-1'>
              <Image
                className='rounded border bg-white object-cover object-center p-2 shadow-xl'
                src={urlFor(coverImage.image).fit('max').auto('format').url()}
                alt={coverImage.alt}
                width={1000}
                height={300}
                priority
              />
            </section>
            <section className='my-6'>
              <div className='prose prose-slate md:prose-base lg:prose-lg xl:prose-xl dark:prose-invert prose-h1:font-extrabold prose-h1:text-cyan-800 prose-h2:font-bold prose-h2:text-cyan-700 prose-h3:font-semibold prose-h3:text-cyan-600 prose-h4:font-medium prose-h4:text-cyan-500 prose-p:tracking-tighter prose-a:text-sky-500 prose-a:transition-colors prose-a:duration-300 hover:prose-a:text-pink-400 prose-strong:text-base-content prose-code:text-pink-600 prose-ol:list-inside prose-ul:list-inside prose-li:text-pink-600 prose-li:marker:text-sky-500 prose-th:bg-emerald-300 prose-th:text-xl prose-td:text-base-content prose-img:w-full prose-img:rounded prose-img:border prose-img:bg-white prose-img:p-2 prose-img:shadow-xl'>
                <PortableTextComponents content={content} />
              </div>
            </section>
            <hr />
            <section className='my-6 flex flex-col items-center justify-center gap-6 sm:items-start sm:justify-start lg:my-10 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-0'>
              <div className='flex items-center gap-2'>
                Categories:
                {tags.map((tag) => (
                  <div key={tag._id}>
                    <TagBadge tag={tag} />
                  </div>
                ))}
              </div>
              <div className='flex flex-row items-center gap-2'>
                Socials:
                <SocialButtons />
              </div>
            </section>
            <hr />
          </article>
        </div>
      </div>
    </main>
  )
}
