export const youtube = {
  name: 'youtube',
  type: 'object',
  title: 'Youtube',
  fields: [
    {
      name: 'video',
      type: 'youtubeVideo',
      title: 'Video',
    },
    {name: 'autoplay', title: 'Autoplay', type: 'boolean', initialValue: false},
    {
      name: 'controls',
      type: 'boolean',
      title: 'Show Controls',
      initialValue: true,
    },
  ],
}
