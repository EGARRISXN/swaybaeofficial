"use client";
import ContactForm from "../components/(inquiries)/ContactForm";
import ContactSocials from "../components/(inquiries)/ContactSocials";
import { motion } from "framer-motion";

export default function Inquiries() {
  return (
    <div id="inquiries" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16">
        <div className="container mx-auto flex mt-2">
          <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Inquiries
          </p>
        </div>
        <br />
        <div className="flex flex-col md:flex-row justify-center mt-16 xs:px-2 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-8 3xl:px-8 md:space-x-8 lg:space-x-10">
          <div className="md:w-3/5 lg:w-2/3 xl:w-2/3 2xl:w-3/4 3xl:w-3/4 rounded-xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [50, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
          <div className="hidden md:block md:w-2/5 lg:w-1/3 xl:w-1/3 2xl:w-1/4 3xl:w-1/4 rounded-xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-50, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ContactSocials />
            </motion.div>
          </div>
          <div className="md:hidden rounded-xl shadow-purple-800/50">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-50, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ContactSocials mobileStyle />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}