import MediaKitContainer from "../components/(mediakit)/MediaKitContainer";

export default function MediaKit() {
  return (
    <div id="mediakit" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div className="container mx-auto flex">
          <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Media Kit
          </p>
        </div>
        <br />
        <h3 className="flex text-center justify-center  mt-8">
          Under Construction!
        </h3>
        <div className="flex flex-col justify-center text-base-content mx-auto rounded-2xl shadow-purple-800/50 mb-16">
          <MediaKitContainer />
        </div>
      </div>
    </div>
  );
}
