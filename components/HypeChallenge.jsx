import Image from "next/image";
import Link from "next/link";
import HypeGuidelines from "./(hypechallenge)/HypeGuidelines";

export default function HypeChallenge() {
  return (
    <div id="hype" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex flex-col items-center mt-4 xs:px-2 sm:px-6">
          <div className="hover:animate-pulse">
            <Link href="/">
              <Image
                src="/images/hypelogo.png"
                quality={100}
                width={830}
                height={448}
                alt="HypeLogo"
                priority
              />
              <p className="text-center lg:text-lg font-bold hover:text-error z-50 mt-[-20px] lg:mt-[-40px]">
                Come <span className="text-error">Join</span> the Hype!
              </p>
            </Link>
          </div>
          <br />
          <p className="text-center underline text-secondary lg:text-xl xl:text-2xl hidden lg:block font-bold py-2">
            Prime Sub = 500 EXP | Tier 1 Sub = 500 EXP | Tier 2 Sub = 1,000 EXP
            | Tier 3 Sub = 2,500 EXP
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div>
              <div className="mt-6 md:mt-0 border-8 border-info shadow-xl shadow-purple-800/50">
                <Image
                  src="/images/hypegoals.PNG"
                  quality={100}
                  width={2000}
                  height={2000}
                  alt="HypeGoals"
                  priority
                />
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-center underline text-secondary font-bold lg:hidden pt-1 pb-4">
                Prime Sub = 500 EXP | Tier 1 Sub = 500 EXP
                <br />
                Tier 2 Sub = 1,000 EXP | Tier 3 Sub = 2,500 EXP
                <br />
              </p>
              <HypeGuidelines />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
