"use client";
import TeespringEmbed1 from "../components/(merch)/TeespringEmbed1";

import { motion } from "framer-motion";

export default function Merch() {
  return (
    <div id="merch" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16">
        <div className="container mx-auto flex mt-2">
          <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Merch
          </p>
        </div>
        <br />
        <div className="flex justify-center mx-4 sm:mx-auto mt-16">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="rounded-2xl shadow-2xl shadow-purple-800/50">
              <TeespringEmbed1 />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
