import Animation from "../../components/Animation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import AboutPhoto from "../../components/(about)/AboutPhoto";
// import NeonCard from "../../components/(neon)/NeonCard";

export default function About() {
  return (
    <Animation>
      <main>
        <Navbar />
        <div className="flex h-screen w-full justify-center items-center p-0"></div>
        {/* <div className=" container flex justify-center items-center ">
          <div className="flex flex-col my-10 md:flex-row space-y-6 px-0 md:px-10 md:space-y-0 md:space-x-12">
            <div className="x">
              <NeonCard />
            </div>
            <div className="x">
              <AboutPhoto />
            </div>
          </div>
        </div> */}

        <Footer />
      </main>
    </Animation>
  );
}
