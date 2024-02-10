import Link from 'next/link'
import PageName from '@/app/components/(ui)/PageName'
import MyButton from '@/app/components/(ui)/MyButton'

import {client} from '@/sanity/lib/sanityClient'

export const revalidate = 60

async function getData() {
  const allCatsQuery = `
    *[_type == 'category'] | order(_createdAt desc) {
      "currentSlug": slug.current,
      title,
      color,
      "blogs": *[_type == 'blog' && references(^._id)] {
        "currentSlug": slug.current,
        title,
        description,
      }
    }`

  const allCatsData = await client.fetch(allCatsQuery)
  return allCatsData
}

export default async function Category() {
  const allCatsData = await getData()

  return (
    <main className='mt-5'>
      <h1 className='hidden'>Category</h1>
      <div id='category' className='h-full'>
        <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
          <PageName>Category</PageName>
          <br />
          <div className='my-4 flex'>
            {allCatsData.map((category, idx) => (
              <div key={idx} className='mb-2 mr-2 inline-block'>
                <div
                  style={{backgroundColor: category.color}}
                  className='mx-auto line-clamp-1 cursor-pointer justify-center rounded-full px-3 py-1 text-center text-xs font-semibold dark:prose-invert'
                >
                  <Link href={`/category/${category.slug}`}>{category.title}</Link>
                </div>
                <div>
                  {category.blogs.map((blog, idx) => (
                    <div key={idx} className='mb-2 mr-2 inline-block'>
                      <Link href={`/hidden/${blog.currentSlug}`}>
                        <div className='flex flex-col'>
                          {blog.title}
                          <br />
                          {blog.description}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className='mx-auto mt-8 flex items-center justify-center'>
            <MyButton>
              <Link href='/hidden'>Return</Link>
            </MyButton>
          </div>
        </div>
      </div>
    </main>
  )
}
