"use client";
import Framer from "./framer";

export default function Home() {
  return (
    <Framer>
      <main className="hero">
        <div className="hero-content flex flex-col items-center">
          <div className="my-16 space-y-10">
            <div className="neon-wrapper pb-2">
              <h1 className="neon">
                Welcome
                <br />
                I&#39;m Sway!
              </h1>
            </div>
            <br />
            <br />
            <div className="neon2-wrapper pb-2">
              <h3 className="neon2">
                Welcome
                <br />
                I&#39;m Sway!
              </h3>
            </div>
          </div>
        </div>
      </main>
    </Framer>
  );
}
