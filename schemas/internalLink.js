export default {
  title: 'Internal Link',
  name: 'internalLink',
  type: 'object',
  fields: [
    {
      title: 'Reference',
      name: 'reference',
      type: 'reference',
      to: [{type: 'blog'}, {type: 'category'}],
    },
  ],
}
