import AllPosts from './AllPosts'
import AllTags from './AllTags'
import SearchBar from '../(ui)/SearchBar'
import SocialButtons from '../(ui)/SocialButtons'

// const revalidate = 30

export default function BlogPage({blog}) {
  return (
    <main className='mt-5'>
      <label className='sr-only'>Blog</label>
      <div className='w-full px-4'>
        <header className='mx-auto flex max-w-6xl items-center justify-between pt-4 lg:px-4 lg:pt-16 xl:px-0'>
          <h1 className='font-bold-200 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-poppins text-xl uppercase tracking-widest text-transparent'>
            Blog
          </h1>
          <SearchBar placeholder={'Search..'} />
        </header>
        <br />
        <article className='mx-auto my-4 max-w-6xl px-4 lg:mt-16'>
          <AllPosts posts={blog} />
          <hr />
          <section className='my-6 flex flex-col items-center justify-center gap-6 sm:items-start sm:justify-start lg:my-10 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-0'>
            <div className='flex items-center gap-2'>
              Categories:
              <AllTags tags={blog} />
            </div>
            <div className='flex flex-row items-center gap-2'>
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
