import Image from "next/image";
import Sway from "../../public/images/biff.jpg";

export default function AboutPhoto() {
  return (
    <div className="w-full h-full p-4">
      <Image
        src={Sway}
        quality={100}
        alt="Sway"
        width={1440}
        height={1800}
        className="rounded-xl shadow-lg shadow-purple-800/50"
        priority
      />
    </div>
  );
}
