import { client, urlFor } from "@/utils/sanityClient";
import Image from "next/image";
import Link from "next/link";
import PageName from "@/components/(ui)/PageName";
import MyButton from "@/components/(ui)/MyButton";

export const revalidate = 60;

async function getData() {
  const query = `
 *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      coverImage
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const data = await getData();

  return (
    <main className="mt-5">
      <h1 className="hidden">Blog</h1>
      <div id="blog" className="w-full">
        <div className="max-w-[1420px] mx-auto pt-4 pb-16 lg:pt-16">
          <PageName>Blog</PageName>
          <br />
          <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 mx-auto place-items-center mt-4 lg:mt-16 px-4 gap-20 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
            {data.map((post, idx) => (
              <div key={idx}>
                <Image
                  src={urlFor(post.coverImage).url()}
                  alt="Blog Image"
                  width={1120}
                  height={630}
                  priority
                  className="rounded-lg mx-auto object-cover border"
                />
                <div className="my-4">
                  <h4 className="prose prose-lg dark:prose-invert tracking-tight font-bold line-clamp-1">
                    {post.title}
                  </h4>
                  <p className="mt-2 prose prose-sm dark:prose-invert tracking-tight line-clamp-1">
                    {post.smallDescription}
                  </p>
                </div>
                <div className="flex items-center justify-center mx-auto">
                  <MyButton>
                    <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                  </MyButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
