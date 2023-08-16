import Image from "next/image";
import Sway from "../../public/images/biff.jpg";

export default function AboutPhoto() {
  return (
    <div className="rounded-3xl border-1 shadow-2xl shadow-purple-800/50">
      <Image
        src={Sway}
        alt="Sway"
        width={500}
        height={500}
        className="w-full h-full rounded-3xl"
        priority
      />
    </div>
  );
}
