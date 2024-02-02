export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Blog Title",
      type: "string",
      description: "Title of the blog post",
    },
    {
      name: "slug",
      title: "Blog Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description: "Slug for the blog post",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Cover Image for the blog post",
    },
    {
      name: "smallDescription",
      title: "Small Description",
      type: "text",
      description: "Small Description of the blog post",
    },
    {
      name: "content",
      title: "Blog Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Content of the blog post",
    },
  ],
};
