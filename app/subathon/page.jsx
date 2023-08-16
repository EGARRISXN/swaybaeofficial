import SubPoster from "../../components/(subathon)/SubPoster";
import SubTable1 from "../../components/(subathon)/SubTable1";
import SubTable2 from "../../components/(subathon)/SubTable2";
import SubTable3 from "../../components/(subathon)/SubTable3";
import SubTable4 from "../../components/(subathon)/SubTable4";

export default function Subathon() {
  return (
    <main className="flex flex-col mx-auto">
      <div className="flex p-4">
        <SubPoster />
      </div>

      <SubTable1 />
      <SubTable2 />
      <SubTable3 />
      <SubTable4 />
    </main>
  );
}
