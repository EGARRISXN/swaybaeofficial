'use client'
import {POST_QUERY} from '@/sanity/lib/queries'
import {useQuery} from '@sanity/react-loader'
import Post from './Post'

export default function PostPreview(props) {
  const {params, initial} = props
  const {data} = useQuery(POST_QUERY, params, {initial})

  if (!data) {
    return <div className='bg-red-100 text-center'>No post found.</div>
  }

  return <Post posts={data} />
}
