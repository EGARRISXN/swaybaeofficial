"use client";
import ContactForm from "../components/(inquiries)/ContactForm";
import ContactList1 from "../components/(inquiries)/ContactList1";
import ContactList2 from "../components/(inquiries)/ContactList2";
import { motion } from "framer-motion";

export default function Inquiries() {
  return (
    <div id="inquiries" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 xs:pb-8 pb-16 pt-16">
        <p className="container mx-auto uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Inquiries
        </p>
        <div className="flex flex-col justify-center md:flex-row my-16 px-4 sm:px-10 md:px-14 lg:px-24 xl:px-28 3xl:px-32 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14 3xl:space-x-16">
          <div className="md:w-3/5 lg:w-2/3 xl:w-2/3 2xl:w-1/2 3xl:w-1/2 rounded-3xl shadow-xl shadow-purple-800/50">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [50, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
          <div className="hidden md:block md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/4 3xl:w-1/5  shadow-purple-800/50">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-50, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ContactList1 />
            </motion.div>
          </div>
          <div className="md:hidden rounded-3xl shadow-purple-800/50">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-50, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ContactList2 />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
