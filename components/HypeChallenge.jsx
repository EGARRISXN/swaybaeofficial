import Image from "next/image";
import Link from "next/link";
import HypeGoals from "../public/images/hypegoals.png";
import HypeLogo from "../public/images/hypelogo.png";
import HypeCard from "./(hypechallenge)/HypeCard";

export default function HypeChallenge() {
  return (
    <div id="about" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex flex-col items-center mt-4 xs:px-2 sm:px-6 md:px-12 lg:px-16">
          <div className="x">
            <Link href="https://twitch.tv/sway_bae" passHref>
              <Image
                src={HypeLogo}
                quality={100}
                width={830}
                height={448}
                alt="HypeLogo"
                className="hover:animate-wiggle h-[80%] w-[80%] mx-auto"
                priority
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="x">
              <div className="border-[8px] lg:border-[10px] border-info rounded-xl shadow-xl shadow-purple-800/50">
                <Image
                  src={HypeGoals}
                  quality={100}
                  width={1080}
                  height={1080}
                  alt="HypeGoals"
                  className="x"
                  priority
                />
              </div>
            </div>

            <div className="x">
              <HypeCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
