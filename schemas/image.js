export default {
  title: 'Image',
  name: 'image',
  type: 'image',
  description:
    "Add an image to the blog. It's important for accessibility and SEO to add a good description of the image.",
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'text',
      description:
        'Some of your visitors cannot see images, be they blind, colorblind, lowlighted. alternative text is of great help for those people that can rely on it to have a good idea of whats on your page',
    },
  ],
}
