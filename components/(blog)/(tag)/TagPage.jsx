import Link from 'next/link'
import SearchBar from '@/components/(ui)/SearchBar'
import TagPostCard from './TagPostCard'

export default function TagPage({tag}) {
  const {title, posts} = tag

  return (
    <main className='mt-5'>
      <label className='sr-only'>Tag Page</label>
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
        <article className='mx-auto my-4 max-w-6xl px-4 lg:mt-16'>
          <section>
            <h4 className='mb-4 font-bold'>
              <span className='mr-0.5'>#</span>
              {title}
            </h4>
            <div className='mt-8 grid grid-cols-1 gap-8 pb-16'>
              {posts.map((post) => (
                <TagPostCard key={post._id} post={post} />
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
