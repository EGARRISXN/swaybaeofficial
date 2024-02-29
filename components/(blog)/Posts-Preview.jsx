'use client'
import {POSTS_QUERY, FEATURED_POSTS_QUERY} from '@/sanity/lib/queries'
import {useQuery} from '@sanity/react-loader'
import Posts from './Posts'

export default function PostsPreview(props) {
  const {initial} = props
  const {data} = useQuery(POSTS_QUERY, {}, {initial})

  if (!data) {
    return <div className='bg-red-100 text-center'>No posts found.</div>
  }

  return <Posts posts={data} />
}
