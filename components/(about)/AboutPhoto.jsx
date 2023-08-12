import Image from "next/image";
import Sway from "../../public/images/biff.jpg";

export default function AboutPhoto() {
  return (
    <div className="shadow-2xl rounded-2xl shadow-purple-800/50 border-2 border-yellow-300">
      <Image
        src={Sway}
        alt="Sway"
        quality={100}
        className="w-full h-full rounded-2xl"
        priority={true}
      />
    </div>
  );
}
