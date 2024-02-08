import {createClient} from 'next-sanity'
import {projectId, dataset, apiVersion} from './env.js'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText, serializers} from '@portabletext/react'

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

const serializers = {
  types: {
    block: ({node, children}) => {
      switch (node.style) {
        case 'h1':
          return <h1>{children}</h1>
        case 'h2':
          return <h2>{children}</h2>
        case 'h3':
          return <h3>{children}</h3>
        case 'h4':
          return <h4>{children}</h4>
        case 'h5':
          return <h5>{children}</h5>
        case 'h6':
          return <h6>{children}</h6>
        case 'blockquote':
          return <blockquote>{children}</blockquote>
        default:
          return <p>{children}</p>
      }
    },
    highlight: ({mark, children}) => {
      const {highlightColor} = mark
      return <span style={{backgroundColor: highlightColor}}>{children}</span>
    },
    image: ({node}) => {
      return <img src={urlFor(node.asset).url()} alt={node.alt} />
    },
    internalLink: ({mark, children}) => {
      const {reference} = mark
      // Assuming you have a route for rendering blog posts
      const url = `/blog/${reference.slug.current}`
      return <a href={url}>{children}</a>
    },
    youtubeEmbed: ({node}) => {
      const {video, autoplay, controls} = node
      const videoUrl = `https://www.youtube.com/embed/${video}?autoplay=${autoplay}&controls=${controls}`
      return (
        <iframe width='560' height='315' src={videoUrl} frameborder='0' allowfullscreen></iframe>
      )
    },
  },
}

// const serializers = {
//   types: {
//
//     youtubeEmbed: ({node}) => {
//       // Implement rendering for YouTube embeds if needed
//       return <div>YouTube Embed: {node.video}</div>
//     },
//   },
// }

export default function Body({blocks}) {
  return (
    <div>
      <PortableText value={blocks} serializers={serializers} />
    </div>
  )
}

// <Body value={data.body} serializers={serializers} />
