'use client'
import {useState} from 'react'
import FeaturedCard from './FeaturedCard'
import LatestCard from './LatestCard'
import LoadButton from '../(ui)/LoadButton'

export default function AllPosts({posts}) {
  const featuredPosts = posts.filter((post) => post.featured)
  const remainingPosts = posts.filter((post) => !post.featured)

  const articlesShown = 3
  const [loadMore, setLoadMore] = useState(articlesShown)

  const showMoreArticles = () => {
    setLoadMore(loadMore + 3)
  }

  return (
    <>
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
      <hr className='mb-8 mt-4 w-full border lg:mb-4' />
      <section>
        <h4 className='mb-4 font-bold'>Latest Posts</h4>
        <div className='mt-8 grid grid-cols-1 gap-16 pb-12 md:grid-cols-2 xl:grid-cols-3'>
          {[...featuredPosts, ...remainingPosts].slice(0, loadMore).map((post) => (
            <div key={post._id} className='x'>
              <LatestCard post={post} />
            </div>
          ))}
        </div>
      </section>
      {posts.length > loadMore && <LoadButton onClick={showMoreArticles} />}
    </>
  )
}
