export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of category',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug for category',
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of category',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Choose a color for this category',
      options: {
        list: [
          {title: 'Green', value: 'green'},
          {title: 'Blue', value: 'blue'},
          {title: 'Purple', value: 'purple'},
          {title: 'Orange', value: 'orange'},
        ],
      },
    },
  ],
}
