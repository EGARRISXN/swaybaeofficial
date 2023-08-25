import SocialCarousel from "../components/(socials)/SocialCarousel";

export default function Socials() {
  return (
    <div id="socials" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="container mx-auto uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Socials
        </p>
        <br />
        <div className="justify-center bg-base-200 mt-16 xs:mx-2 sm:mx-16 px-1 border-[6px] rounded-3xl shadow-xl border-base-content shadow-purple-800/50">
          <SocialCarousel />
        </div>
      </div>
    </div>
  );
}
