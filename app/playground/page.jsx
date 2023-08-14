import Animation from "../../components/Animation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Playground() {
  return (
    <Animation>
      <main className="bg-black">
        <Navbar />
        <div></div>
        <Footer />
      </main>
    </Animation>
  );
}
