import Image from "next/image";

export default function AboutPhoto() {
  return (
    <div className="w-full h-full py-1">
      <Image
        src="/biff.jpg"
        alt="Sway"
        width={1440}
        height={1800}
        quality={100}
        priority
        className="rounded-xl shadow-lg shadow-purple-800/50"
      />
    </div>
  );
}
