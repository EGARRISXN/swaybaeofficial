import Link from 'next/link'
import PageName from '@/components/(other)/PageName'
import SearchBar from '@/components/(ui)/SearchBar'
import TagPostCard from './TagPostCard'

export default function TagPage({tag}) {
  const {title, posts} = tag

  return (
    <main className='mt-5'>
      <label className='sr-only'>Tag Page</label>
      <div className='w-full px-4'>
        <header className='mx-auto flex max-w-6xl flex-row items-center justify-between gap-2 pt-4 max-[320px]:flex-col lg:px-4 lg:pt-16 xl:px-0'>
          <Link href='/blog'>
            <PageName>&#8592;Back</PageName>
          </Link>
          <SearchBar placeholder={'Search..'} />
        </header>
        <br />
        <article className='mx-auto mt-4 grid max-w-6xl grid-cols-1 px-2 sm:px-4 lg:mt-12'>
          <section>
            <h3 className='mb-2 ml-1 text-3xl font-bold'>
              <span className='mr-1 text-xl text-primary'>&#x2717;</span>
              {title}
            </h3>
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
