import Image from "next/image";
import Sway from "../../public/images/biff.jpg";

export default function AboutPhoto() {
  return (
    <div className="rounded-xl shadow-xl shadow-purple-800/50">
      <Image
        src={Sway}
        quality={100}
        alt="Sway"
        width="100%"
        height="100%"
        className="w-full h-full rounded-xl shadow-xl shadow-purple-800/50"
        priority
      />
    </div>
  );
}
