import React from 'react'
import {PortableText} from '@portabletext/react'

const Serializer = ({blocks}) => {
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
      image: ({node}) => {
        return (
          <img
            src={node.url}
            alt={node.alt}
            // Add any additional props you need
          />
        )
      },
      youtubeEmbed: ({node}) => {
        // Implement rendering for YouTube embeds if needed
        return <div>YouTube Embed: {node.video}</div>
      },
    },
  }

  return (
    <div>
      <PortableText blocks={blocks} serializers={serializers} />
    </div>
  )
}

export default Serializer
