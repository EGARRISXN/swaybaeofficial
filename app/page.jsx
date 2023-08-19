import Animation from "../components/Animation";
import Image from "next/image";
import Link from "next/link";
import HeroLines from "../public/images/herolines.png";

export default function Home() {
  return (
    <Animation>
      <main>
        <div className="flex justify-center xs:mt-8 xs:pt-8 sm:pt-6 sm:mt-6 xl:mt-10 xl:pt-10 ">
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
        </div>
      </main>
    </Animation>
  );
}
