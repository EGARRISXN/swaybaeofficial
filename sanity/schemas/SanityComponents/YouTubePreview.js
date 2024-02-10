'use client'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import {Flex, Text} from '@sanity/ui'

export function YouTubePreview(props) {
  const {selection} = props
  const url = selection?.url

  return (
    <Flex padding={4} justify={'center'}>
      {url ? <ReactPlayer url={url} /> : <Text>Add a YouTube URL</Text>}
    </Flex>
  )
}
