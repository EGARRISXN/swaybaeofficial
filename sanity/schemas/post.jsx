import {TfiWrite} from 'react-icons/tfi'

export const post = {
  name: 'post',
  title: 'Posts',
  icon: TfiWrite,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Required'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required().error('Required'),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Required'),
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.max(200).error('Max 200 characters'),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: 'Content of blog post',
    },
  ],
  preview: {
    select: {
      coverImage: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {coverImage, title, publishedAt} = selection
      return {
        title,
        subtitle: new Date(publishedAt).toLocaleDateString(),
        media: coverImage,
      }
    },
  },
}
