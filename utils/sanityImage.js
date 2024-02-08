import imageUrlBuilder from '@sanity/image-url'
import {client} from './sanityClient'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}
// Examples of how to use the urlFor function
{
  /* <img src={urlFor(author.image).width(200).url()} />
<img src={urlFor(movie.poster).width(500).height(300).url()}></img>
<img src={urlFor(mysteryPerson.mugshot).width(200).height(200).blur(50).url()}></img> */
}
