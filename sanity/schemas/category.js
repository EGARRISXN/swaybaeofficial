export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      title: 'Color',
      name: 'color',
      type: 'string',
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Pink', value: 'pink'},
          {title: 'Green', value: 'green'},
          {title: 'Blue', value: 'blue'},
          {title: 'Purple', value: 'purple'},
          {title: 'Orange', value: 'orange'},
        ],
      },
    },
  ],
}
