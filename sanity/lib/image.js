import imageUrlBuilder from '@sanity/image-url'
import {id, set} from './api'

const imageBuilder = imageUrlBuilder({
  projectId: id,
  dataset: set,
})

export function urlFor(source) {
  return imageBuilder.image(source)
}
