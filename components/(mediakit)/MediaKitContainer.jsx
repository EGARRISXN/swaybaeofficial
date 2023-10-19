import Image from "next/image";
import MediaKit from "../../public/images/mediakit.png";
import Link from "next/link";

export default function MediaKitPhoto() {
  return (
    <div className="x pt-12">
      <Link href="https://beacons.ai/sway_bae/mediakit" passHref>
      <Image
        src={MediaKit}
        quality={100}
        alt="Media Kit"
        width="100%"
        height="100%"
        className="x"
        priority
      />
      </Link>
    </div>
  );
}
