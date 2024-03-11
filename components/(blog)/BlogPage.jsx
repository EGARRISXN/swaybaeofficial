import AllPosts from './AllPosts'
import AllTags from './AllTags'
import TagFilter from './TagFilter'
import PageName from '@/components/(other)/PageName'
import SearchBar from '../(ui)/SearchBar'
import SocialButtons from '../(ui)/SocialButtons'

// const revalidate = 30

export default function BlogPage({blog}) {
  return (
    <main className='mt-5'>
      <label className='sr-only'>Blog</label>
      <div className='w-full px-4'>
        <header className='mx-auto flex max-w-6xl flex-row items-center justify-between gap-2 pt-4 max-[320px]:flex-col lg:px-4 lg:pt-16 xl:px-0'>
          <PageName>Blog</PageName>
          <div className='flex flex-row gap-1'>
            <SearchBar placeholder={'Search..'} />
            <TagFilter tags={blog} />
          </div>
        </header>
        <br />
        <article className='mx-auto my-4 max-w-6xl px-2 sm:px-4 lg:mt-12'>
          <AllPosts posts={blog} />
          <hr />
          <section className='my-6 flex items-center justify-center max-[300px]:max-w-60 lg:my-10'>
            <div className='flex flex-row flex-wrap items-center gap-2'>
              Socials:
              <SocialButtons />
            </div>
          </section>
          <hr />
        </article>
      </div>
    </main>
  )
}
