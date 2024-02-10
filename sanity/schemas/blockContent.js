// This is the schema type for block content used in the post document type. Importing this type into the studio configuration"s `schema` property lets you reuse it in other document types with:{ title: "Some title", name: "someName", type: "blockContent" }.
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These correspond with HTML tags, but you can set any title or value you want and decide how you want to deal with it where you want to use your content.
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
        // Decorators usually describe a single property – e.g. a typographic preference or highlighting by editors.
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
            ],
          },
        ],
      },
    },
    // ADD ADDITONAL TYPES HERE. Note: You can't use primitive types such as "string" and "number" in the same array as a block type.
    {
      title: 'Body Image',
      name: 'bodyimage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      title: 'YouTube',
      type: 'youtube',
    },
  ],
}
