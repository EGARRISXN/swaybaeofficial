import Image from "next/image";
import Ava from "../../public/images/ava.jpg";

export default function NeonChips() {
  return (
    <div className="flex">
      <a href="#" className="group transition-all">
        <div className="relative flex w-fit items-center rounded-full border bg-gradient-to-bl from-cyan-500 via-purple-500 to-pink-500 group-hover:bg-gradient-to-tl group-hover:from-purple-500 group-hover:via-cyan-500 group-hover:to-blue-500">
          <div className="h-10 w-10 overflow-hidden rounded-full object-cover object-center">
            <Image src={Ava} alt="ava" className="h-full w-full" />
          </div>
          <div className="px-2">
            <h1 className="text-white">Bima Mahendra</h1>
          </div>
          <div className="absolute -z-10 h-full w-full animate-pulse rounded-full bg-cyan-500 blur-md"></div>
        </div>
      </a>
    </div>
  );
}
