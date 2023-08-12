// import Link from "next/link";
// import Image from "next/image";
// import LogoWhite from "../public/images/logowhite.png";
// import TwitchEmbed from "../components/(socials)/TwitchEmbed";
import TwitchEmbed2 from "../components/(socials)/TwitchEmbed2";

export default function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-content flex flex-col items-center">
          <div className="mb-16">
            <TwitchEmbed2 />
            <TwitchEmbed2 />
            {/* <Link href="/">
              <Image
                src={LogoWhite}
                width={400}
                height={200}
                alt="Logo White"
                priority
              />
            </Link> */}
          </div>
        </div>
      </main>
    </>
  );
}
