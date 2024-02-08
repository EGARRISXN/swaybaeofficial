import {client} from '@/utils/sanityClient'

async function getData(slug) {
  const query = `
    *[_type == "blog" && $slug in category[]->slug.current ] {
    }`

  const data = await client.fetch(query, {slug})
  return data
}

export async function BlogsByCategory({params}) {
  const data = await getData(params.slug)
  return {
    props: {
      blogs: data,
    },
  }
}
