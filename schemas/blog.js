export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of blog post',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug for blog post',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of blog post',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Cover Image for blog post',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for SEO and accessibility.',
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
      description: 'Body of blog post',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
    prepare({title, media}) {
      return {
        title,
        media,
      }
    },
  },
}
