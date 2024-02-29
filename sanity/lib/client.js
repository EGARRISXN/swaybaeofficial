import {createClient} from '@sanity/client'
import {id, set, apiVersion} from './api'

export const client = createClient({
  projectId: id,
  dataset: set,
  apiVersion: apiVersion,
  useCdn: true,
  // These settings will be overridden in
  // ./sanity/lib/store.ts when draftMode is enabled
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})

// const revalidateSecret = process.env.SANITY_STUDIO_REVALIDATE_SECRET
// useCdn: revalidateSecret ? false : true,
//! *******************************************************************
// import {createClient} from 'next-sanity'
// import {createClient} from '@sanity/client/stega'
//! *******************************************************************
// export async function sanityFetch({
//   query,
//   params = {},
//   tags,
// }) {
//   return client.fetch(query, params, {
//     next: {
//       //revalidate: 30, // for simple, time-based revalidation
//       tags, // for tag-based revalidation
//     },
//   })
// }
// import {sanityFetch} from '@/sanity/client'
// export async function HomeLayout({children}) {
//   // revalidate if there are changes to either the home document or to a page document (since they're referenced to in navItems)
//   const home = await sanityFetch({
//     query: `*[_id == "home"][0]{...,navItems[]->}`,
//     tags: ['home', 'page']
//     })
//   }
//! *******************************************************************
// export const token = process.env.SANITY_API_READ_TOKEN
// export async function sanityFetch({query, params = {}, tags}) {
//   const isDraftMode = draftMode().isEnabled
//   if (isDraftMode && !token) {
//     throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
//   }
//   const REVALIDATE_SKIP_CACHE = 0
//   const REVALIDATE_CACHE_FOREVER = false
//   return client.fetch(query, params, {
//     ...(isDraftMode && {
//       token: token,
//       perspective: 'previewDrafts',
//     }),
//     next: {
//       revalidate: isDraftMode ? REVALIDATE_SKIP_CACHE : REVALIDATE_CACHE_FOREVER,
//       tags,
//     },
//   })
// }
