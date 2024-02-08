import Link from 'next/link'
import {client} from '@/utils/sanityClient'
import PageName from '@/components/(ui)/PageName'
import MyButton from '@/components/(ui)/MyButton'

export const revalidate = 60

async function getData() {
  const query = `
 *[_type == 'category'] | order(_createdAt desc) {
    "currentSlug": slug.current,
    title,
    color,
  }`

  const data = await client.fetch(query)
  return data
}

export default async function Category() {
  const data = await getData()

  return (
    <main className='mt-5'>
      <h1 className='hidden'>Category</h1>
      <div id='category' className='h-full'>
        <div className='mx-auto max-w-[1420px] pb-16 pt-4 lg:pt-16'>
          <PageName>Category</PageName>
          <br />
          <div className='my-4 flex'>
            {data.map((category, idx) => (
              <span key={idx} className='mb-2 mr-2 inline-block'>
                <Link href={`/category/${category.slug}`}>
                  <div className='mx-auto cursor-pointer justify-center rounded-full bg-gray-200 px-3 py-1 text-center text-xs font-semibold text-gray-800 transition duration-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'>
                    {category.title}
                  </div>
                </Link>
              </span>
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
