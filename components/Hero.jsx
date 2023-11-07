import Image from "next/image";
import HeroLogo from "../public/images/herologo.png";

export default function Hero() {
  return (
    <div id="hero" className="w-full">
      <h1 className="hidden">Hero</h1>
      <div className="max-w-[1420px] mx-auto xs:py-1 sm:pt-6 sm:pb-4 z-[50]">
        <div className="flex  z-[50] justify-center mx-auto my-40 sm:my-20 md:my-16 lg:my-10 xl:my-4 4xl:my-16 sm:px-16 md:px-24 lg:px-32 2xl:px-40 3xl:px-48">
          <Image
            src={HeroLogo}
            quality={100}
            width={1450}
            height={900}
            alt="Hero"
            priority
          />
        </div>
      </div>
    </div>
  );
}
