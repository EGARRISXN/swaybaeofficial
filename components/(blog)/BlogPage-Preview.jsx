'use client'
import {POSTS_QUERY, TAGS_QUERY} from '@/sanity/lib/queries'
import {useQuery} from '@sanity/react-loader'
import BlogPage from './BlogPage'

export default function BlogPagePreview(props) {
  const {initial} = props
  const {data} = useQuery(POSTS_QUERY, TAGS_QUERY, {}, {initial})

  if (!data) {
    return <div className='bg-red-100 text-center'>No posts found.</div>
  }

  return <BlogPage blog={data} />
}
