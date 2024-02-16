import imageUrlBuilder from '@sanity/image-url'
import {client} from './client'

const imageBuilder = imageUrlBuilder(client)

export function urlFor(source) {
  return imageBuilder.image(source)
}
