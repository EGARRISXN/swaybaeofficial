import Link from 'next/link'
import Image from 'next/image'
import PageName from '@/app/components/(ui)/PageName'
import MyButton from '@/app/components/(ui)/MyButton'

import {client, urlFor} from '@/sanity/lib/sanityClient'

export const revalidate = 60

async function getData(slug) {
  const categoryQuery = `
    *[_type == 'category' && slug.current == '${slug}'] {
      "currentSlug": slug.current,
      title,
      color,
      "blogs": *[_type == 'blog' && references(^._id)] {
        "currentSlug": slug.current,
        title,
        coverImage,
        description,
        category[]->{
          "slug": slug.current,
          title,
          color,
        }, 
      },
    }[0]`

  const data = await client.fetch(categoryQuery)
  return data
}

export default async function CategorySlug({params}) {
  const {slug} = params
  const categoryData = await getData(slug)

  if (!categoryData) {
    return <div>Loading...</div>
  }

  return (
    <main className='mt-5'>
      <h1 className='hidden'>Category Slug</h1>
      <div id='CategorySlug' className='w-full'>
        <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
          <PageName>
            <Link href='/hidden' className='text-primary hover:underline hover:underline-offset-4'>
              ← Back
            </Link>
          </PageName>
          <br />
          <div className='my-4 flex'>
            <div className='mb-2 mr-2 inline-block'>
              <div
                style={{backgroundColor: categoryData.color}}
                className='mx-auto line-clamp-1 cursor-pointer justify-center rounded-full px-3 py-1 text-center text-xs font-semibold dark:prose-invert'
              >
                <Link href='/category'>{categoryData.title}</Link>
              </div>
            </div>
          </div>
          <div className='mx-auto mt-4 grid max-w-5xl grid-cols-1 place-items-center gap-20 px-4 md:grid-cols-2 md:gap-8 lg:mt-16 lg:gap-10 xl:gap-12 2xl:gap-14'>
            {categoryData.blogs.map((blog, index) => (
              <div key={index} className='overflow-hidden bg-white shadow sm:rounded-lg'>
                <Image
                  src={urlFor(blog.coverImage).url()}
                  alt='Blog Image'
                  width={1120}
                  height={630}
                  priority
                  className='mx-auto rounded-lg border object-cover'
                />
                <div className='my-4 flex'>
                  {blog.category.map((category, idx) => (
                    <span key={idx} className='mb-2 mr-2 inline-block'>
                      <div
                        style={{backgroundColor: category.color}}
                        className='mx-auto line-clamp-1 cursor-pointer justify-center rounded-full px-3 py-1 text-center text-xs font-semibold dark:prose-invert'
                      >
                        <Link href={`/category/${category.slug}`}>{category.title}</Link>
                      </div>
                    </span>
                  ))}
                </div>
                <h4 className='prose prose-lg line-clamp-1 font-bold tracking-tight dark:prose-invert'>
                  {blog.title}
                </h4>

                <div className='bg-gray-50 px-4 py-4'>
                  <Link href={`/hidden/${blog.currentSlug}`}>
                    <div className='hover:text-primary-dark text-primary'>Read more</div>
                  </Link>
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
