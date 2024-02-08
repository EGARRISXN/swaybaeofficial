export default {
  title: 'YouTube',
  name: 'youtubeEmbed',
  type: 'object',
  fields: [
    {
      title: 'Video',
      name: 'video',
      type: 'youtubeVideo',
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'controls',
      title: 'Controls',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
