/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration"s `schema` property
 * lets you reuse it in other document types with:
 * {
 *    name: "someName",
 *    title: "Some title",
 *    type: "blockContent"
 * }
 */

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  description: 'Block content for the blog',
  of: [
    {
      title: 'Block',
      name: 'block',
      type: 'block',
      description: 'Add, edit, and reorder content blocks',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
          {title: 'Highlight', value: 'highlight'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Internal link',
            name: 'internalLink',
            type: 'internalLink',
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            description: 'Add a link to the blog',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can"t use
    // primitive types such as "string" and "number" in the same array
    // as a block type.
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description:
        "Add an image to the blog. It's important for accessibility and SEO to add a good description of the image.",
      fields: [
        {
          title: 'Alternative text',
          name: 'alt',
          type: 'text',
          description:
            'Some of your visitors cannot see images, be they blind, colorblind, lowlighted. alternative text is of great help for those people that can rely on it to have a good idea of whats on your page',
        },
      ],
    },
    {
      title: 'YouTube',
      name: 'youtubeEmbed',
      type: 'object',
      description:
        'Add a YouTube video to the post. Paste the URL of the video in the field below.',
      fields: [
        {
          title: 'Video',
          name: 'video',
          type: 'youtubeVideo',
        },
      ],
    },
  ],
}
