import MediaKitContainer from "../components/(mediakit)/MediaKitContainer"

export default function Merch() {
  return (
    <div id="merch" className="w-full">
<div className="max-w-[1420px] mx-auto py-16">
      <div className="flex pl-2 sm:pl-6 md:pl-16 mt-2">
        <h1 className="font-poppins uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Merch
          </h1>
        </div>
        <br />
        <h3 className="flex mx-auto justify-center mt-16">
          Under Construction!
        </h3>
        <div className="flex flex-col mx-auto justify-center text-base-content rounded-xl shadow-purple-800/50 mb-16">
          <MediaKitContainer />
        </div>
      </div>
    </div>
  )
}
