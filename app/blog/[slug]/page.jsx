import { client, urlFor } from "@/utils/sanityClient";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import PageName from "@/components/(ui)/PageName";
import MyButton from "@/components/(ui)/MyButton";

export const revalidate = 60;

async function getData(slug) {
  const query = `
*[_type == 'blog' && slug.current == '${slug}'] {
  "currentSlug": slug.current,
    title,
    content,
    coverImage
}[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogPost({ params }) {
  const data = await getData(params.slug);

  return (
    <main className="mt-5">
      <h1 className="hidden">Blog Post</h1>
      <div id="blogpost" className="w-full">
        <div className="max-w-[1420px] mx-auto pt-4 pb-16 lg:pt-16">
          <PageName>
            <Link
              href="/blog"
              className="text-primary hover:underline hover:underline-offset-4"
            >
              ←Back
            </Link>
          </PageName>
          <br />
          <div className="max-w-5xl grid grid-cols-1 mx-auto place-items-center px-4">
            <h2 className="mt-2 prose prose-slate prose-lg dark:prose-invert text-xl lg:text-3xl text-center leading-8 tracking-tight">
              {data.title}
            </h2>
            <Image
              src={urlFor(data.coverImage).url()}
              alt="Blog Post Image"
              width={1120}
              height={630}
              priority
              className="rounded-lg mx-auto mt-8 w-[900px] object-cover border"
            />

            <div className="mt-12 prose prose-blue prose-lg lg:prose-xl dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
              <PortableText value={data.content} />
            </div>
            <div className="flex items-center justify-center mx-auto mt-8">
              <MyButton>
                <Link href="/blog">Return</Link>
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
