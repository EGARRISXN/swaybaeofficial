"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import UniversalButton from "../../utils/UniversalButton";

export default function SocialCard({
  imageSrc,
  alt,
  title,
  username,
  linkText,
  linkUrl,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="card p-4 bg-base-200 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
        <figure>
          <Image
            src={imageSrc}
            alt={alt}
            width={350}
            height={350}
            className="hover:scale-125 ease-in duration-300"
          />
        </figure>
        <div className="card-body p-4">
          <h1 className="card-title text-3xl">{title}</h1>
          <p>{username}</p>
          <div className="card-actions flex justify-end">
            <Link href={linkUrl}>
              <UniversalButton>{linkText}</UniversalButton>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
