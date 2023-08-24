import { Transition } from "../components/Transition";
import Image from "next/image";
import Link from "next/link";
import TheBG from "../public/images/thebg.png";

export default function Home() {
  return (
    <Transition>
      <main className="flex justify-center items-center">
        <div className="pb-40 sm:pt-6 sm:pb-10">
          <Link href="/about">
            <Image
              src={TheBG}
              width={600}
              height={400}
              quality={100}
              alt="Hero"
              className="z-50 "
            />
          </Link>
        </div>
      </main>
    </Transition>
  );
}
