'use client'
import {useState} from 'react'
import PageName from '../(other)/PageName'
import SearchBar from './SearchBar'
import FeaturedCard from './FeaturedCard'
import PostCard from './PostCard'
import LoadButton from './LoadButton'

// const revalidate = 30

export default function Posts({posts}) {
  const featuredPosts = posts.filter((post) => post.featured)
  const remainingPosts = posts.filter((post) => !post.featured)

  const articlesShown = 3
  const [loadMore, setLoadMore] = useState(articlesShown)

  const showMoreArticles = () => {
    setLoadMore(loadMore + 3)
  }

  return (
    <main className='mt-5'>
      <h1 className='hidden'>Posts</h1>
      <div id='Posts' className='w-full px-4'>
        <header className='mx-auto flex max-w-6xl items-center justify-between pt-4 lg:pt-16'>
          <PageName>Blog</PageName>
          <SearchBar />
        </header>
        <br />
        <article className='mx-auto my-4 max-w-6xl px-4 lg:mt-16'>
          <section>
            <h4 className='mb-4 font-bold'>Featured Posts</h4>
            {featuredPosts.length > 0 && (
              <div className='mt-8 grid grid-cols-1 gap-16 pb-16'>
                {featuredPosts.map((post) => (
                  <div key={post._id}>
                    <FeaturedCard post={post} />
                  </div>
                ))}
              </div>
            )}
          </section>
          <hr className='mb-12 mt-4 w-full border' />
          <section>
            <h4 className='mb-4 font-bold'>Latest Posts</h4>
            <div className='mt-8 grid grid-cols-1 gap-16 pb-12 md:grid-cols-2 xl:grid-cols-3'>
              {remainingPosts.slice(0, loadMore).map((post) => (
                <div key={post._id} className='x'>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </section>
          {remainingPosts.length > loadMore && <LoadButton onClick={showMoreArticles} />}
        </article>
      </div>
    </main>
  )
}
