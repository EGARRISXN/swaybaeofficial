import Table1Modal from "../../components/(subathon)/Table1Modal";
import Table2Modal from "../../components/(subathon)/Table2Modal";
import Table3Modal from "../../components/(subathon)/Table3Modal";
import Table4Modal from "../../components/(subathon)/Table4Modal";
import SubPoster from "../../components/(subathon)/SubPoster";

export default function Subathon() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row justify-center content-center mx-auto py-16 ">
        <p className="text-xl font-bold text-center pb-8 md:hidden">
          More Details Below!
        </p>
        <div className="flex flex-col px-4">
          <SubPoster />
          <p className="p-4 text-bold text-secondary hover:text-primary text-center justify-center md:hidden">
            *Click checkmarks above for a clip!
          </p>
        </div>
        <div className="flex flex-col px-4 pb-4 py-10">
          <Table1Modal />
          <Table2Modal />
          <Table3Modal />
          <Table4Modal />
          <p className="p-4 text-bolder text-primary hover:text-primary-focus text-center justify-center xs:hidden md:block">
            *Click individual checkmark for a clip!
          </p>
        </div>
      </div>
    </main>
  );
}
