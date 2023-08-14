"use client";
import Animation from "../../components/Animation";

import SubathonPoster from "../../components/SubathonPoster";

export default function Subathon() {
  return (
    <Animation>
      <main>
        <div className="container flex flex-col items-center justify-center pb-16 pt-16">
          <div>
            <SubathonPoster />
          </div>
        </div>
      </main>
    </Animation>
  );
}
