import Link from "next/link";
import Image from "next/image";
import MyButton from "@/components/(ui)/MyButton";

export default function SocialCard({ imageSrc, alt, label, username, href }) {
  return (
    <div className="card flex h-full w-full p-4">
      <figure>
        <Link href={href}>
          <Image
            src={imageSrc}
            alt={alt}
            width={300}
            height={200}
            className="hover:scale-110 ease-in duration-300"
          />
        </Link>
      </figure>
      <div className="card-body text-base-content bg-pink-100/10 rounded-b-2xl border-2">
        <div className="lobster card-title text-3xl text-center justify-center">
          {label}
        </div>
        <div className="card-actions justify-center">
          <MyButton>
            <Link href={href}>{username}</Link>
          </MyButton>
        </div>
      </div>
    </div>
  );
}
