'use client'
import {useState} from 'react'
import PostCard from './PostCard'

export default function AllPosts({posts}) {
  const articlesShown = 4
  const [loadMore, setLoadMore] = useState(articlesShown)
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown)
  }

  return (
    <>
      <div className='mx-auto grid max-w-5xl grid-cols-1 gap-10 gap-y-16 px-4 pb-24 md:grid-cols-2'>
        {posts.slice(0, loadMore)?.map((post) => (
          <div key={post._id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        {loadMore < posts?.length ? (
          <button
            type='button'
            className='group relative overflow-hidden rounded-lg bg-white px-2 py-3 text-sm md:text-base'
            onClick={showMoreArticles}
          >
            <div className='absolute inset-0 w-3  bg-[#8F00FF]  transition-all duration-[350ms] ease-out group-hover:w-full'></div>
            <span className='relative text-black group-hover:text-white '>Load more posts</span>
          </button>
        ) : (
          <button
            type='button'
            className='cursor-not-allowed rounded-lg bg-[#483248] px-2 py-3 text-sm text-[#FFF] opacity-50 md:text-base'
            onClick={showMoreArticles}
            disabled
          >
            All posts loaded
          </button>
        )}
      </div>
    </>
  )
}
