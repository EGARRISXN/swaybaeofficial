import Image from "next/image"
import Link from "next/link"
import BORK from "../public/images/BORK.gif"
import UniversalButton from "../utils/UniversalButton"

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
      <p className="xs:text-2xl sm:text-3xl font-semibold pt-2">
        PAGE NOT FOUND.
      </p>
      <br />
      <Link href="/">
        <UniversalButton>Go Home</UniversalButton>
      </Link>
    </div>
  )
}
