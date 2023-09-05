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
        <div className="text-center xs:px-0 sm:px-0 pb-4">
          <h5 className="xs:text-7xl sm:text-9xl font-bold text-primary">
            Thank You!
          </h5>
          <p className="xs:text-md sm:text-2xl mt-[-8px]">
            Thank you for all the support this Subathon.
          </p>
          <p className="xs:text-md sm:text-2xl mt-[-6px]">
            I truly could not have done it without <b>YOU</b>!
          </p>
        </div>

        <p className="hidden sm:block text-lg animate-pulse text-secondary text-center">
          * Click title to be redirected or <b>select</b> boxes for clips!*
        </p>

        <p className="block sm:hidden text-sm animate-pulse text-secondary text-center">
          *Click title to be redirected or <b>select</b> boxes for clips!*
        </p>

        <div className="flex flex-row justify-center content-center xs:px-2 sm:px-0 mb-16">
<SubPoster />
        </div>
      </div>
    </div>
  );
}
