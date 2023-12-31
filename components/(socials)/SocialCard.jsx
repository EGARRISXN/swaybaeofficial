import Link from "next/link";
import Image from "next/image";

export default function SocialCard({
  imageSrc,
  alt,
  title,
  username,
  linkText,
  linkUrl,
}) {
  return (
    <div className="card flex h-full w-full p-4">
      <figure>
        <Link href={linkUrl}>
          <Image
            src={imageSrc}
            alt={alt}
            width="100%"
            height="100%"
            className="hover:scale-110 ease-in duration-300"
          />
        </Link>
      </figure>
      <div className="card-body text-base-content bg-pink-100/10 rounded-b-2xl border-2">
        <Link href={linkUrl}>
          <h1 className="card-title text-3xl text-center hover:text-primary justify-center">
            {title}
          </h1>
        </Link>
        <div className="card-actions justify-center">
          <Link href={linkUrl}>
            <button className="btn-md w-40 h-12 btn-secondary hover:scale-110 ease-in duration-300 shadow-md shadow-gray-400 rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
              {username}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
