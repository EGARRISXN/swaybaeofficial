"use client";
import { useEffect } from "react";
import Image from "next/image";
import BORK from "../public/images/BORK.gif";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={BORK} alt="Bork" width={300} height={300} quality={100} />
      <p className=" text-lg sm:text-2xl font-semibold pt-2">
        Oh no! Something went wrong.
      </p>
      <br />
      <button
        onClick={reset}
        className="btn btn-md btn-secondary mb-4 w-36 2xl:w-44 3xl:w-48 3xl:btn-lg p-3 hover:scale-110 ease-in duration-300 shadow-md shadow-gray-400 rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 text-white"
      >
        Refresh
      </button>
    </div>
  );
}
