// [(($pageIndex - 1) * 10)...$pageIndex * 10]{
// Get subsequent paginated blogs
async function getData(pageIndex, limit) {
  const query = `
   *[_type == "blog"] | order(publishedAt desc, _createdAt desc) [${(pageIndex - 1) * limit}...${pageIndex * limit}] {
      ...,
      category[]->
    }`

  const data = await client.fetch(query, {pageIndex, limit})
  return data
}

export async function PaginatedBlogs({limit, pageIndex = 1}) {
  const data = await getData(pageIndex, limit)
  return {
    props: {
      blogs: data,
      limit,
      pageIndex,
    },
  }
}
