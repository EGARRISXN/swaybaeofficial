import {YouTubePreview} from './SanityComponents/YouTubePreview'

export default {
  title: 'YouTube Embed',
  name: 'youtube',
  type: 'object',
  fields: [
    {
      title: 'YouTube video URL',
      name: 'url',
      type: 'url',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  component: {
    preview: {YouTubePreview},
  },
}

// prepare(selection) {
//   const {url} = selection
//   // Return preview component
//   return {
//     title: 'YouTube Video Preview',
//     media: () => (
//       <div style={{width: '300px', height: '200px'}}>
//         <ReactPlayer url={url} width='100%' height='100%' />
//       </div>
//     ),
//   }
// },
