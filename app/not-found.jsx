import Image from "next/image";
import Link from "next/link";
import BORK from "../public/images/BORK.gif";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src={BORK}
        alt="Bork"
        width={300}
        height={300}
        quality={100}
        className="mx-auto xs:w-[100vh] sm:w-[50vh]"
      />
      <p className=" text-2xl sm:text-3xl font-semibold pt-2">
        PAGE NOT FOUND.
      </p>
      <br />
      <Link href="/">
        <button className="btn btn-md btn-secondary mb-4 w-36 2xl:w-44 3xl:w-48 3xl:btn-lg p-3 hover:scale-110 ease-in duration-300 shadow-md shadow-gray-400 rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
          Go Home
        </button>
      </Link>
    </div>
  );
}
