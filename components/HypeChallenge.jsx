import Image from "next/image";

export default function HypeChallenge() {
  return (
    <div id="hype" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex flex-col items-center mt-4 xs:px-2 sm:px-6 md:px-12 lg:px-16">
          <div className="x">
            <Image
              src="/images/hypelogo.png"
              quality={100}
              width={830}
              height={448}
              alt="HypeLogo"
              className="x"
              priority
            />
          </div>

          <div className="x">
            <div className="border-[8px] lg:border-[10px] border-info rounded-xl shadow-xl shadow-purple-800/50">
              <Image
                src="/images/hypegoals.png"
                quality={100}
                width={1080}
                height={1080}
                alt="HypeGoals"
                className="x"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
