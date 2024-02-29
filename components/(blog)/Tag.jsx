'use client'
import Link from 'next/link'
import {useState} from 'react'
import PageName from '../(other)/PageName'
import SearchBar from './SearchBar'
import TagCard from './TagCard'
import LoadButton from './LoadButton'

export default function Tag({tag}) {
  const articlesShown = 2
  const [loadMore, setLoadMore] = useState(articlesShown)

  const showMoreArticles = () => {
    setLoadMore(loadMore + 2)
  }

  return (
    <main className='mt-5'>
      <h1 className='hidden'>Tag</h1>
      <div id='Tag' className='w-full px-4'>
        <header className='mx-auto flex max-w-6xl items-center justify-between pt-4 lg:pt-16'>
          <Link href='/blog'>
            <PageName>&#8592; Back</PageName>
          </Link>
          <SearchBar />
        </header>
        <br />
        <article className='mx-auto my-4 max-w-6xl px-4 lg:mt-16'>
          <section>
            <h4 className='mb-4 font-bold'>
              <span className='mr-0.5'>#</span>
              {tag.title}
            </h4>
            <div className='mt-8 grid grid-cols-1 gap-16 pb-16'>
              {tag.posts.slice(0, loadMore).map((post, idx) => (
                <TagCard key={idx} post={post} />
              ))}
            </div>
          </section>
          {loadMore < tag.posts.length && <LoadButton onClick={showMoreArticles} />}
        </article>
      </div>
    </main>
  )
}
