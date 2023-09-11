"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import HeroLogo from "../public/images/herologo.png"

export default function Hero() {
  return (
    <div id="hero" className="w-full">
      <h1 className="hidden">Hero</h1>
      <div className="max-w-[1420px] mx-auto xs:py-1 sm:pt-6 sm:pb-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex justify-center mx-auto my-40 sm:my-20 md:my-16 lg:my-10 xl:my-4 4xl:my-16 sm:px-16 md:px-24 lg:px-32 2xl:px-40 3xl:px-48">
            <Link href="/">
              <Image
                src={HeroLogo}
                quality={100}
                width={1450}
                height={900}
                alt="Hero"
                priority
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
