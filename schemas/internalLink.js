export default {
  title: 'Internal Link',
  name: 'internalLink',
  type: 'object',
  description: 'Reference an internal page, category, or blog post',
  fields: [
    {
      title: 'Reference',
      name: 'reference',
      type: 'reference',
      to: [{type: 'blog'}, {type: 'category'}],
    },
  ],
}
