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
    <div className="card flex mx-auto text-center p-4 h-full w-full mt-16 bg-base-content border-[8px] text-base-200 border-info rounded-2xl">
      <figure>
        <Link href={linkUrl}>
          <Image
            src={imageSrc}
            alt={alt}
            width="100%"
            height="100%"
            className="hover:scale-125 ease-in duration-300 rounded-t-sm"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h1 className="card-title text-xl text-center justify-center">
          {title}
        </h1>
        <p>{username}</p>
        <div className="card-actions justify-center">
          <Link href={linkUrl}>
            <button className="btn btn-secondary w-32 h-10 hover:scale-110 ease-in duration-300 shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
              {linkText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
