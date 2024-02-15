import {BsTags} from 'react-icons/bs'

export const tag = {
  name: 'tag',
  title: 'Tags',
  icon: BsTags,
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
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          {title: 'Electric Blue', value: 'deepskyblue'},
          {title: 'Muted Blue', value: 'royalblue'},
          {title: 'Light Purple', value: 'mediumorchid'},
          {title: 'Bright Pink', value: 'deeppink'},
          {title: 'Indigo', value: 'indigo'},
          {title: 'Lavender', value: 'lavender'},
          {title: 'Muted Grey', value: 'lightgrey'},
          {title: 'Barbie Pink', value: 'pink'},
          {title: 'Firecracker Red', value: 'red'},
          {title: 'Burnt Orange', value: 'orange'},
          {title: 'Highlighter Yellow', value: 'yellow'},
          {title: 'Sweet Lime', value: 'lime'},
        ],
      },
    },
  ],
}
