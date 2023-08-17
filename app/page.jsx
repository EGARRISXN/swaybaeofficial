import Animation from "../components/Animation";
import Image from "next/image";
import Link from "next/link";
import HeroLines from "../public/images/herolines.png";
// import HeroNoLines from "../public/images/heronlines.png";

export default function Home() {
  return (
    <Animation>
      <main>
        <div className="flex items-center justify-center mx-auto container pt-16 mt-16 md:pt-8 md:mt-4 ">
          <Link href="/subathon">
            <Image
              src={HeroLines}
              width={600}
              height={400}
              quality={100}
              alt="Hero"
              className="x"
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
