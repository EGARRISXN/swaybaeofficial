"use client";
import Framer from "../../components/Framer";
import Neon2 from "../../components/(about)/Neon2";
import AboutText from "../../components/(about)/AboutText";
import AboutPhoto from "../../components/(about)/AboutPhoto";

export default function About() {
  return (
    <Framer>
      <div className="container border-2 border-yellow-300 justify-center flex">
        {/* <Neon /> */}
        <div className="flex flex-col border-2 border-yellow-300">
          <Neon2 />
          <AboutText />
        </div>
        <div className="flex flex-col border-2 border-yellow-300">
          <AboutPhoto />
        </div>
      </div>
    </Framer>
  );
}
