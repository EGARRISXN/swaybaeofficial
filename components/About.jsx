import AboutPhoto from "../components/(about)/AboutPhoto";
import AboutCard from "../components/(about)/AboutCard";

export default function About() {
  return (
    <div id="about" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex pl-2 sm:pl-6 md:pl-16 mt-2">
          <h1 className="font-poppins uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About
          </h1>
        </div>
        <br />
        <div className="flex flex-col-reverse mx-auto justify-center mt-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 sm:gap-y-12 md:flex-row md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20">
          <div className="md:w-3/5 lg:w-2/3 2xl:w-3/4">
            <AboutCard />
          </div>

          <div className="md:w-2/5 lg:w-1/3 2xl:w-1/4">
            <AboutPhoto />
          </div>
        </div>
      </div>
    </div>
  );
}
