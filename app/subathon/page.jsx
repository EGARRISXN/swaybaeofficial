"use client";
import Animation from "../../components/Animation";

import CardExample from "../../components/CardExample";

export default function Subathon() {
  return (
    <Animation>
      <main>
        <div className="container flex flex-col items-center justify-center pb-16 lg:pb-0 pt-16">
          <div>
            <h1 className="text-6xl text-center animate-pulse pb-6">
              Under Construction!
            </h1>
            <CardExample />
          </div>
        </div>
      </main>
    </Animation>
  );
}
