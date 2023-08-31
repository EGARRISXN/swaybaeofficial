"use client";
import { useEffect } from "react";
import Image from "next/image";
import BORK from "../public/images/BORK.gif";
import UniversalButton from "../utils/UniversalButton";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className="flex items-center text-center">
      <div className="container sm:mt-16">
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
  );
}
