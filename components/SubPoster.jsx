import Image from "next/image";
import Title from "../public/images/title.png";

export default function SubPoster() {
  return (
    <div className="border-2 border-yellow">
      <Image src={Title} width={500} height={500} alt="Title" />
    </div>
  );
}
