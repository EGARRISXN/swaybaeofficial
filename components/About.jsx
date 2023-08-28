"use client";
import AboutPhoto from "../components/(about)/AboutPhoto";
import AboutCard from "../components/(about)/AboutCard";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div className="container mx-auto flex">
          <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About
          </p>
        </div>
        <br />
        <div className="flex flex-col-reverse justify-center mt-16 xs:px-2 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-8 3xl:px-8 md:flex-row md:space-x-8 lg:space-x-10">
          <div className="md:w-3/5 lg:w-2/3 xl:w-2/3 2xl:w-2/3 3xl:w-2/3">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <AboutCard />
            </motion.div>
          </div>

          <div className="md:w-2/5 lg:w-1/3 xl:w-1/3 2xl:w-1/3 3xl:w-1/3">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <AboutPhoto />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
