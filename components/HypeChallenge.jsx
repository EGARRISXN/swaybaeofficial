import Image from "next/image";
import Link from "next/link";

export default function HypeChallenge() {
  return (
    <div id="hype" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex flex-col items-center mt-4 xs:px-2 sm:px-6 md:px-12 lg:px-16">
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
              <p className="text-center text-lg font-bold hover:text-error z-50 mt-[-40px]">
                Come Join the Hype!
              </p>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="flex mt-8 border-[8px] lg:border-[10px] border-info rounded-xl shadow-xl shadow-purple-800/50">
              <Image
                src="/images/hypegoals.PNG"
                quality={100}
                width={2000}
                height={2000}
                alt="HypeGoals"
                priority
              />
            </div>
            <div className="flex mt-8 border-[8px] lg:border-[10px] border-info rounded-xl shadow-xl shadow-purple-800/50">
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
        </div>
      </div>
    </div>
  );
}
