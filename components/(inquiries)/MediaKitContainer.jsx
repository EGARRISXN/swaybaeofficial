import Image from "next/image";
import Link from "next/link";

export default function MediaKitPhoto() {
  return (
    <div className="pt-12">
      <Link
        href="https://beacons.ai/sway_bae/mediakit"
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >
        <Image
          className="hover:scale-105 ease-in duration-200"
          src="/mediakit.png"
          alt="Media Kit"
          width={600}
          height={350}
          quality={100}
          priority
        />
      </Link>
    </div>
  );
}
