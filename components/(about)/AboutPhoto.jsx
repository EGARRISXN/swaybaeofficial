import Image from "next/image";
import Sway from "../../public/images/biff.jpg";

export default function AboutPhoto() {
  return (
    <div className="rounded-3xl shadow-2xl">
      <Image
        src={Sway}
        quality={100}
        alt="Sway"
        width="full"
        height="full"
        className="w-full h-full rounded-3xl shadow-2xl"
        priority
      />
    </div>
  );
}
