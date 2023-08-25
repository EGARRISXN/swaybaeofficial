"use client";
import TeespringEmbed1 from "../components/(merch)/TeespringEmbed1";
import TeespringEmbed2 from "../components/(merch)/TeespringEmbed2";
import TeespringEmbed3 from "../components/(merch)/TeespringEmbed3";
import { motion } from "framer-motion";

export default function Merch() {
  return (
    <div id="merch" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="container mx-auto uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Merch
        </p>
        <div className="flex items-center justify-center my-16">
          <div className=" hidden lg:block rounded-3xl shadow-purple-800/50">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              className="hover:scale-105 ease-in duration-300"
            >
              <TeespringEmbed1 />
            </motion.div>
          </div>
          <div className="hidden md:block lg:hidden rounded-3xl shadow-purple-800/50">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              className="hover:scale-105 ease-in duration-300"
            >
              <TeespringEmbed2 />
            </motion.div>
          </div>
          <div className="block md:hidden rounded-3xl shadow-purple-800/50">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              className="hover:scale-105 ease-in duration-300"
            >
              <TeespringEmbed3 />
            </motion.div>
          </div>
          <div className="hidden sm:block md:hidden ml-2 ">
            <h3>
              <hr className="bg-primary" />
              Why
              <br />
              Don&apos;t
              <br />
              You
              <br />
              Pick <br />
              Up
              <br />
              Some
              <br />
              Merch?
              <hr className="bg-primary" />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
