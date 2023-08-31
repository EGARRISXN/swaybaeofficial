"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeroLogo from "../public/images/herologo.png";

export default function Hero() {
  return (
    <div id="hero" className="w-full">
      <div className="max-w-[1240px] mx-auto xs:py-1 sm:pt-6 sm:pb-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex justify-center items-center mt-40 mb-40 sm:mt-10 sm:mb-10 md:mt-8 md:mb-8 lg:mt-8 lg:mb-8 xl:mt-8 xl:mb-8 2xl:mt-8 2xl:mb-8 3xl:mt-16 3xl:mb-16">
            <Link href="/">
              <Image
                src={HeroLogo}
                quality={100}
                width={900}
                height={600}
                alt="Hero"
                priority
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
