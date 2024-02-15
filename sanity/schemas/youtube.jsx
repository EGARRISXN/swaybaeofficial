export const youtubeEmbed = {
  name: 'youtubeEmbed',
  title: 'Youtube',
  type: 'object',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'youtubeVideo',
    },
    {name: 'autoplay', title: 'Autoplay', type: 'boolean', initialValue: false},
    {
      name: 'controls',
      title: 'Show Controls',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
