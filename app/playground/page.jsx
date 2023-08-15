import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SubPoster from "../../components/SubPoster";

export default function Playground() {
  return (
    <main className="bg-gradient-to-bl bg-base-300 to-black-300 bg-cover">
      <Navbar />
      <div className="flex justify-center p-0">
        <SubPoster />
      </div>
      <Footer />
    </main>
  );
}
