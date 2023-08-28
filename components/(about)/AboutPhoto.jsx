import Image from "next/image";
import Sway from "../../public/images/biff.jpg";

export default function AboutPhoto() {
  return (
    <div className="rounded-3xl shadow-2xl shadow-purple-800/50">
      <Image
        src={Sway}
        quality={100}
        alt="Sway"
        width="full"
        height="full"
        className="w-full h-full rounded-xl shadow-2xl shadow-purple-800/50"
        priority
      />
    </div>
  );
}
