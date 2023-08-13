"use client";
import Animation from "../../components/Animation";
import AboutPhoto from "../../components/(about)/AboutPhoto";
import NeonCard from "../../components/(neon)/NeonCard";

export default function About() {
  return (
    <Animation>
      <main>
        <div className="container justify-center flex">
          <div className="flex flex-col">
            <NeonCard />
          </div>
          <div className="flex flex-col">
            <AboutPhoto />
          </div>
        </div>
      </main>
    </Animation>
  );
}
