import {BookIcon} from '@sanity/icons'

const postIcon = () => <BookIcon />

export const post = {
  name: 'post',
  type: 'document',
  title: 'Post',
  icon: postIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().error('Required'),
      options: {
        indexing: true,
      },
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required().error('Required'),
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
      options: {hotspot: true},
      validation: (Rule) => Rule.required().error('Required'),
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      validation: (Rule) => Rule.required().max(200).error('No more than 200 characters.'),
    },
    {
      name: 'content',
      type: 'blockContent',
      title: 'Content',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tag(s)',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
      options: {
        layout: 'tags',
        min: 1,
        max: 3,
      },
      validation: (Rule) => Rule.required().error('Required'),
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      description: 'Mark this post as featured',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      initialValue: () => new Date().toISOString(),
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
