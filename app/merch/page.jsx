"use client";
import Animation from "../../components/Animation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import TeespringEmbed1 from "../../components/(merch)/TeespringEmbed1";
// import TeespringEmbed2 from "../../components/(merch)/TeespringEmbed2";
// import TeespringEmbed3 from "../../components/(merch)/TeespringEmbed3";

export default function Merch() {
  return (
    <Animation>
      <Navbar />
      <main>
        {/* <div className="container mx-auto flex flex-col items-center justify-center py-16">
          <div className=" hidden lg:block">
            <TeespringEmbed1 />
          </div>
          <div className="hidden md:block lg:hidden">
            <TeespringEmbed2 />
          </div>
          <div className="block md:hidden">
            <TeespringEmbed3 />
          </div>
        </div> */}
      </main>
      <Footer />
    </Animation>
  );
}
