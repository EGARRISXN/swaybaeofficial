import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SubPoster from "../../components/(subathon)/SubPoster";
import SubTable1 from "../../components/(subathon)/SubTable1";
import SubTable2 from "../../components/(subathon)/SubTable2";
import SubTable3 from "../../components/(subathon)/SubTable3";
import SubTable4 from "../../components/(subathon)/SubTable4";

export default function Subathon() {
  return (
    <main>
      <div className="p-4 flex flex-col md:flex-row justify-center flex-grow">
        <div>
          <SubPoster />
        </div>

        <div className="halfboi">
          <SubTable1 />
          <SubTable2 />
          <SubTable3 />
          <SubTable4 />
        </div>
      </div>
    </main>
  );
}
