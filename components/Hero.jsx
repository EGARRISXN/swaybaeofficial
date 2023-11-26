"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroLogo from "../public/images/herologo.png";

export default function Hero() {
  return (
    <div id="hero" className="w-full">
      <h1 className="hidden">Hero</h1>
      <div className="min-h-[calc(100vh-12rem)] flex justify-center items-center z-[50]">
        <motion.div
          className="flex z-[50] max-w-[900px] justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={HeroLogo}
            quality={100}
            width={1450}
            height={900}
            alt="Hero"
            className="w-full h-full flex flex-shrink"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
