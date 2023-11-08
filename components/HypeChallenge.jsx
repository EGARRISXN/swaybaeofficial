import Image from "next/image";
import HypeGoals from "../public/images/hypegoals.png";
import HypeLogo from "../public/images/hypelogo.png";

export default function HypeChallenge() {
  return (
    <div id="hype" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex flex-col items-center mt-4 xs:px-2 sm:px-6 md:px-12 lg:px-16">
          <div className="x">
            <Image
              src={HypeLogo}
              width="830px"
              height="448px"
              alt="HypeLogo"
              className="x"
              priority
            />
          </div>

          <div className="x">
            <div className="lg:border-[10px] border-info rounded-xl shadow-xl shadow-purple-800/50">
              <Image
                src={HypeGoals}
                width="1080px"
                height="1080px"
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
