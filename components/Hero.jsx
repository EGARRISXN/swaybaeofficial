"use client";
import Image from "next/image";
import Link from "next/link";
import TheBG from "../public/images/thebg.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="hero" className="w-full">
      <div className="max-w-[1240px] mx-auto xs:py-16 sm:py-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex justify-center items-center mt-40 mb-40 sm:mt-0 sm:mb-0">
            <Link href="/">
              <Image
                src={TheBG}
                width={900}
                height={600}
                quality={100}
                alt="Hero"
                className="z-50 "
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
