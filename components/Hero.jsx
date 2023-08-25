"use client";
import Image from "next/image";
import Link from "next/link";
import HeroPng from "../public/images/heropng.png";
import { motion } from "framer-motion";

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
          <div className="flex mx-auto justify-center items-center mt-20 mb-10 xs:mt-40 xs:mb-40 sm:mt-20 sm:mb-10 md:mt-16 md:mb-2 lg:mt-16 lg:mb-2 xl:mt-16 xl:mb-2 2xl:mt-16 2xl:mb-2 3xl:mt-16 3xl:mb-2 ">
            <Link href="/">
              <Image
                src={HeroPng}
                width={900}
                height={600}
                quality={100}
                alt="Hero"
                className="z-100 lg:w-[900px] lg:h-[600px] xl:w-[900px] xl:h-[600px] 2xl:w-[900px] 2xl:h-[600px] 3xl:w-[1200px] 3xl:h-[800px]"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
