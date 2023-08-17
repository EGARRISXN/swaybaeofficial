import Animation from "../components/Animation";
import Image from "next/image";
import Link from "next/link";
import HeroLines from "../public/images/herolines.png";
// import HeroNoLines from "../public/images/heronlines.png";

export default function Home() {
  return (
    <Animation>
      <main>
        <div className="flex justify-center  xs:mt-16 xs:pt-16 sm:mt-2 sm:pt-2 md:mt-12 md:pt-12 lg:mt-8 lg:pt-8 xl:mt-10 xl:pt-10 2xl:mt-16 2xl:pt-16">
          <Link href="/subathon">
            <Image
              src={HeroLines}
              width={600}
              height={400}
              quality={100}
              alt="Hero"
              className="z-10"
            />
          </Link>
          {/* <Image
            src={HeroNoLines}
            width={600}
            height={400}
            quality={100}
            alt="Hero"
            className="x"
          /> */}
        </div>
      </main>
    </Animation>
  );
}
