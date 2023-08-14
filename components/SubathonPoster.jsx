import Image from "next/image";
import Svggg from "../public/images/svggg.svg";

export default function SubathonPoster() {
  return (
    <div className="text-center p-2 rounded-xl">
      <Image
        src={Svggg}
        alt="Picture of the author"
        width={500}
        height={500}
        className="rounded-3xl"
      />
    </div>
  );
}
