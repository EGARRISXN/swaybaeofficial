import {groq} from 'next-sanity'

const commonFields = `
  _id,
  _createdAt,
  title,
  publishedAt,
  excerpt,
  coverImage {
    'image': asset->url,
    alt,
  },
  'tags': tags[]->{
    _id,
    'tagSlug': slug.current,
    title,
    color,
  },
`

const postCommonQuery = `
  ${commonFields}
`

export const POSTS_QUERY = groq`
  *[_type == 'post'] | order(_createdAt desc) {
    ${postCommonQuery}
    'postSlug': slug.current,
    featured,
  }
`

export const POST_QUERY = groq`
  *[_type == 'post' && slug.current == $slug] {
    ${postCommonQuery}
    'content': content[]{...},
    "headings": content[length(style) == 2 && string::startsWith(style, "h")],
  }[0]
`

export const TAGS_QUERY = groq`
  *[_type == 'tag'] | order(_createdAt desc) {
    ${commonFields}
    'tagSlug': slug.current,
  }
`

export const TAG_QUERY = groq`
  *[_type == 'tag' && slug.current == $slug] {
    ${commonFields}
    'posts': *[_type == 'post' && references(^._id)] | order(_createdAt desc) {
      ${postCommonQuery}
      'postSlug': slug.current,
    },
     'featuredPosts': *[_type == 'featuredPost' && references(^._id)] | order(_createdAt desc) {
      ${postCommonQuery}
      'featuredPostSlug': slug.current,
    },
  }[0]
`

// export const postFields = /* groq */ `
//   ...,
//   "slug": slug.current,
//   "publishedAt": coalesce(publishedAt, _updatedAt),
// `
// export const latestPostQuery = /* groq */ `
// *[_type == "post"] | order(publishedAt desc, _updatedAt desc) [0] {
//   ${postFields}
// }`
// export const postQuery = /* groq */ `
// {
//   "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
//     content,
//     ${postFields}
//   },
//   "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
//     content,
//     ${postFields}
//   }
// }`
// export const postSlugsQuery = /* groq */ `
// *[_type == "post" && defined(slug.current)][].slug.current
// `
// export const postBySlugQuery = /* groq */ `
// *[_type == "post" && slug.current == $slug][0] {
//   ${postFields}
// }
// `
