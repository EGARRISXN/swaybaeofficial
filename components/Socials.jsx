import Carousel from "./Carousel";

export default function Socials() {
  return (
    <div id="socials" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="container mx-auto uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Socials
        </p>
        <br />
        <div className="border-[6px] rounded-3xl bg-base-200 px-6 shadow-xl border-base-content shadow-purple-800/50 my-16 mx-16">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
