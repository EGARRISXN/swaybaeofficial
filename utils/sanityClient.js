import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import {projectId, dataset, apiVersion} from '@/utils/env'

export const client = createClient({
  apiVersion: apiVersion || '2024-02-01',
  projectId: projectId || 'i9qt6ktn',
  dataset: dataset || 'production',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
