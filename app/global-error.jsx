"use client";
import { useEffect } from "react";
import Image from "next/image";
import BORK from "../public/images/BORK.gif";
import UniversalButton from "../utils/UniversalButton";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <main>
          <div className={`container ${error}`}>
            <Image
              src={BORK}
              alt="Bork"
              width={300}
              height={300}
              quality={100}
              className="mx-auto xs:w-[100vh] sm:w-[50vh]"
            />
            <p className="xs:text-xl sm:text-2xl font-semibold animate-pulse pt-2">
              500 - Something went wrong..
            </p>
            <br />
            <UniversalButton onClick={reset}>Refresh</UniversalButton>
          </div>
        </main>
      </body>
    </html>
  );
}
