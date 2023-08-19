import Animation from "../components/Animation";
import Image from "next/image";
import Link from "next/link";
import HeroLines from "../public/images/herolines.png";

export default function Home() {
  return (
    <Animation>
      <main className="justify-center flex xs:mt-24 sm:mt-6 lg:mt-10">
        <Link href="/subathon">
          <Image
            src={HeroLines}
            width={600}
            height={400}
            quality={100}
            alt="Hero"
            className="z-50 "
          />
        </Link>
      </main>
    </Animation>
  );
}
