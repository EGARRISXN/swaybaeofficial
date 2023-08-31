"use client";
import { useState, useEffect } from "react";
import SubPoster from "../components/(subathon)/SubPoster";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Subathon2023() {
  const [isLoaded, setIsLoaded] = useState(false); // State to track component loading
  const [isSubPosterLoaded, setIsSubPosterLoaded] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 4000); // Adjust the delay time as needed

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="merch" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16">
        <div className="container mx-auto mt-2">
          <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Subathon
          </p>
        </div>
        <br />
        <h3 className="text-4xl text-center text-primary hover:text-secondary pb-2 mt-16">
          Thank you so much for your support this Subathon!!
        </h3>
        <p className="text-lg font-semibold animate-pulse text-secondary hover:text-primary text-center pb-6">
          ** Click the title to be redirected or select boxes below for clips!
          **
        </p>

        <div className="flex flex-row justify-center content-center mb-16">
          <div
            className={`flex rounded-xl xs:px-2 sm:px-0 xs:w-[100%] sm:w-[50%] ${
              isSubPosterLoaded ? "" : "loadinggg"
            }`}
          >
            {isLoaded ? <SubPoster /> : <Skeleton count={10} height={100} />}
          </div>
        </div>
      </div>
    </div>
  );
}
