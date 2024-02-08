import {createClient} from 'next-sanity'
import {projectId, dataset, apiVersion} from './env.js'
import imageUrlBuilder from '@sanity/image-url'

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

// Examples of how to use the urlFor function

/* <img src={urlFor(author.image).width(200).url()} />
<img src={urlFor(movie.poster).width(500).height(300).url()}></img>
<img src={urlFor(mysteryPerson.mugshot).width(200).height(200).blur(50).url()}></img> */
