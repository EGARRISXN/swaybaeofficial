import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../public/images/logowhite.png";
import TwitchEmbed from "../components/(socials)/TwitchEmbed";

export default function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-content flex flex-col items-center">
          <div className="mb-16">
            <Link href="/">
              <Image
                src={LogoWhite}
                width={400}
                height={200}
                alt="Logo White"
                priority
              />
            </Link>
          </div>
          <TwitchEmbed />
        </div>
      </main>
    </>
  );
}
