"use client";
import TeespringEmbed1 from "../components/(merch)/TeespringEmbed1";
import TeespringEmbed2 from "../components/(merch)/TeespringEmbed2";
import TeespringEmbed4 from "../components/(merch)/TeespringEmbed4";
import TeespringEmbed3 from "../components/(merch)/TeespringEmbed3";
import { motion } from "framer-motion";

export default function Merch() {
  return (
    <div id="merch" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16">
        <div className="container mx-auto flex">
          <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Merch
          </p>
        </div>
        <br />
        <div className="flex justify-center mt-16">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="shadow-2xl shadow-purple-800/50"
          >
            <div className="hidden lg:block rounded-3xl shadow-xl shadow-purple-800/50">
              <TeespringEmbed1 />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="shadow-2xl shadow-purple-800/50"
          >
            <div className="hidden md:block lg:hidden rounded-3xl shadow-xl shadow-purple-800/50">
              <TeespringEmbed2 />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="shadow-2xl shadow-purple-800/50"
          >
            <div className="hidden sm:block md:hidden rounded-3xl shadow-xl shadow-purple-800/50">
              <TeespringEmbed4 />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="shadow-2xl shadow-purple-800/50"
          >
            <div className="block sm:hidden rounded-3xl shadow-xl shadow-purple-800/50">
              <TeespringEmbed3 />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
