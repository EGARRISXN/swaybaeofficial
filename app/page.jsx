import Animation from "../components/Animation";
import Image from "next/image";
import Link from "next/link";
import HeroLines from "../public/images/herolines.png";

export default function Home() {
  return (
    <Animation>
      <main className="flex justify-center items-center">
        <div className="pb-40 sm:pt-6 sm:pb-10">
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
        </div>
      </main>
    </Animation>
  );
}
