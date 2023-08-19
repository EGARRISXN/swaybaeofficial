import Table1Modal from "../../components/(subathon)/Table1Modal";
import Table2Modal from "../../components/(subathon)/Table2Modal";
import Table3Modal from "../../components/(subathon)/Table3Modal";
import Table4Modal from "../../components/(subathon)/Table4Modal";
import SubPoster from "../../components/(subathon)/SubPoster";

export default function Subathon() {
  return (
    <main>
      <div className="flex flex-col  lg:flex-row justify-center content-center mx-auto py-16 xl:py-24">
        <p className="text-2xl font-semibold text-center pb-10 md:hidden">
          More Details Below!
        </p>
        <div className="flex flex-col px-4">
          <SubPoster />
          <p className="p-4 font-semibold text-sm text-secondary hover:text-primary text-center justify-center md:hidden">
            **Click the title to be redirected
            <br />
            or click a checkmark for a clip!
          </p>
        </div>
        <div className="flex flex-col px-6 md:px-12 my-4">
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
    </main>
  );
}
