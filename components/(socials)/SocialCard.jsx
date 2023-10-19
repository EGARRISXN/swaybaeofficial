import Link from "next/link"
import Image from "next/image"

export default function SocialCard({
  imageSrc,
  alt,
  title,
  username,
  linkText,
  linkUrl,
}) {
  return (
    <div className="card flex mx-auto text-center h-full w-full mt-16 bg-base-200 border-8 text-base-content border-info rounded-xl">
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
      <div className="card-body">
        <h1 className="card-title text-2xl text-center justify-center pb-2">
          {title}
        </h1>
        <div className="card-actions justify-center">
          <Link href={linkUrl}>
            <button className="btn-sm btn-secondary w-32 hover:scale-110 ease-in duration-300 shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
              {username}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
