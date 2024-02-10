'use client'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import {PortableText} from '@portabletext/react'

const serializers = {
  types: {
    youtube: ({node}) => {
      const {url} = node
      return <ReactPlayer url={url} />
    },
  },
}

export default function Body({blocks}) {
  return <PortableText value={blocks} types={serializers} />
}
