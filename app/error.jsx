"use client"
import { useEffect } from "react"
import Image from "next/image"
import BORK from "../public/images/BORK.gif"
import UniversalButton from "../utils/UniversalButton"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
      <div className="flex flex-col items-center justify-center">
        <Image
          src={BORK}
          alt="Bork"
          width={300}
          height={300}
          quality={100}
        />
        <p className="xs:text-lg sm:text-2xl font-semibold pt-2">
          Oh no! Something went wrong.
        </p>
        <br />
        <UniversalButton onClick={(reset)}>Refresh</UniversalButton>
      </div>
  )
}
