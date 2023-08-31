import SubPoster from "../components/(subathon)/SubPoster";

export default function Subathon2023() {
  return (
    <div id="merch" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16">
        <div className="container mx-auto mt-2">
          <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Subathon
          </p>
        </div>
        <br />
        <h3 className="text-4xl text-center text-primary hover:text-secondary pb-2 mt-16">
          Thank you so much for your support this Subathon!!
        </h3>
        <p className="text-lg font-semibold text-secondary hover:text-primary text-center pb-6">
          ** Click the title to be redirected or certain checkmarks for a
          surprise! **
        </p>

        <div className="flex flex-row justify-center content-center mb-16">
          <div className="flex flex-col xs:px-4 sm:mr-4 rounded-xl">
            <SubPoster />
          </div>
        </div>
      </div>
    </div>
  );
}
