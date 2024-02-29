'use client'
import {TAG_QUERY} from '@/sanity/lib/queries'
import {useQuery} from '@sanity/react-loader'
import Tag from './Tag'

export default function TagPreview(props) {
  const {initial} = props
  const {data} = useQuery(TAG_QUERY, {}, {initial})

  if (!data) {
    return <div className='bg-red-100 text-center'>No Tag found.</div>
  }

  return <Tag tag={data} />
}
