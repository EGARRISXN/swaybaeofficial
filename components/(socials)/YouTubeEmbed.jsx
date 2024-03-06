'use client'
import {useState, useEffect} from 'react'

export default function VideoPlayer({vnum}) {
  const [videoSrc, setVideoSrc] = useState()

  useEffect(() => {
    const loadVideo = async () => {
      const cid = 'UCbpQhE5NYQ05pSp_DJJQxCA'
      const channelURL = encodeURIComponent(
        `https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`,
      )
      const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`
      try {
        const response = await fetch(reqURL)
        const result = await response.json()
        const link = result.items[vnum].link
        const id = link.substr(link.indexOf('=') + 1)
        setVideoSrc(`https://youtube.com/embed/${id}?controls=0&autoplay=1`)
      } catch (error) {
        console.log('error', error)
      }
    }
    loadVideo()
  }, [vnum])

  return (
    <div className='aspect-h-9 aspect-w-16 rounded-lg'>
      <label className='sr-only'>YouTube video by Sway Bae</label>
      <iframe
        src={videoSrc}
        allowFullScreen={true}
        loading='lazy'
        width='100%'
        height='100%'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
        className='rounded-lg'
      ></iframe>
    </div>
  )
}
