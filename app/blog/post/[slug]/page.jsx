import Link from 'next/link'
import PageName from '@/components/(ui)/PageName'
// import SearchBar from '@/components/(blog)/SearchBar'
// import FunButton from '@/components/(ui)/FunButton'
// import TableOfContent from '@/components/(blog)/TableOfContent'
import SlugCard from '@/components/(blog)/SlugCard'
import {client} from '@/sanity/lib/client'

async function getData(slug) {
  const query = `
    *[_type == 'post' && slug.current == '${slug}'] {
      _id,
      title,
      publishedAt,
      'content': content[]{...},
      "headings": content[length(style) == 2 && string::startsWith(style, "h")],
      coverImage {
        "image": asset->url,
        alt,
      },
      'tags': tags[]->{
        _id,
        'tagSlug': slug.current,
        title,
        color,
      },
    }[0]`

  const data = await client.fetch(query)
  return data
}

export default async function PostSlug({params}) {
  const data = await getData(params.slug)

  return (
    <main>
      <p className='hidden'>Post Slug</p>
      <div id='PostSlug' className='w-full'>
        <div className='mx-auto max-w-7xl pb-16 pt-4 lg:pt-16'>
          {/* <SearchBar /> */}
          {/* <Link href='/blog'>
            <FunButton />
          </Link> */}
          <PageName>
            <Link href='/blog' className='text-primary hover:underline hover:underline-offset-4'>
              ←Back
            </Link>
          </PageName>
          <SlugCard data={data} />
        </div>
      </div>
      {/* <TableOfContent headings={data.headings} /> */}
    </main>
  )
}
