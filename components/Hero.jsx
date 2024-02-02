"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <main>
      <h1 className="hidden">Hero</h1>
      <div id="hero" className="w-full">
        <div className="max-w-[1420px] flex justify-center items-center mx-auto min-h-[calc(100vh-12rem)] z-[50]">
          <motion.div
            className="flex z-[50] max-w-[900px] justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/herologo.png"
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
    </main>
  );
}
