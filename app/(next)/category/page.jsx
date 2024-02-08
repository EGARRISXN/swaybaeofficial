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
          <div className='mx-auto flex justify-center gap-3'>
            {data.map((category, idx) => (
              <div key={idx}>
                <div className={`mx-auto h-32 w-32 rounded-full bg-${category.color}`}>
                  <h4 className='prose prose-lg line-clamp-1 font-bold tracking-tight dark:prose-invert'>
                    <Link href={`/category/${category.currentSlug}`}>{category.title}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className='mx-auto mt-8 flex items-center justify-center'>
            <MyButton>
              <Link href='/blog'>Return</Link>
            </MyButton>
          </div>
        </div>
      </div>
    </main>
  )
}
