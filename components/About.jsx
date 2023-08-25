"use client";
import AboutPhoto from "../components/(about)/AboutPhoto";
import AboutCard from "../components/(about)/AboutCard";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="container mx-auto uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          About
        </p>
        <br />
        <div className="flex flex-col-reverse justify-center mx-auto my-16 md:flex-row px-4 sm:px-10 md:px-14 lg:px-24 xl:px-28 3xl:px-32 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14 3xl:space-x-16 ">
          <div className="md:w-3/5 lg:w-2/3 xl:w-2/3 2xl:w-1/2 3xl:w-1/2">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <AboutCard />
            </motion.div>
          </div>

          <div className=" md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/4 3xl:w-1/5">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              className="hover:scale-105 ease-in duration-300"
            >
              <AboutPhoto />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
