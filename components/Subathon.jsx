import Table1Modal from "../components/(subathon)/Table1Modal";
import Table2Modal from "../components/(subathon)/Table2Modal";
import Table3Modal from "../components/(subathon)/Table3Modal";
import Table4Modal from "../components/(subathon)/Table4Modal";
import SubPoster from "../components/(subathon)/SubPoster";

export default function Subathon2023() {
  return (
    <div id="merch" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div className="container mx-auto flex">
          <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Subathon
          </p>
        </div>
        <br />
        <div className="flex flex-col lg:flex-row justify-center content-center mx-auto my-16">
          <p className="text-2xl font-semibold text-center pb-10 md:hidden">
            More Details Below!
          </p>
          <div className="flex flex-col xs:px-4 sm:mr-4 rounded-3xl">
            <SubPoster />
            <p className="p-4 font-semibold text-sm text-secondary hover:text-primary text-center justify-center md:hidden">
              **Click the title to be redirected
              <br />
              or click a checkmark for a clip!
            </p>
          </div>
          <div className="flex flex-col xs:px-6 sm:px-0 my-4">
            <Table1Modal />
            <Table2Modal />
            <Table3Modal />
            <Table4Modal />
            <p className="px-1 py-4 text-bolder text-sm text-primary hover:text-primary-focus xs:hidden md:block">
              *Click the title to be redirected
              <br />
              or click a checkmark for a clip!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
