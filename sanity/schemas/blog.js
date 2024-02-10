export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alt. Text',
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
