"use client"
import { motion } from "framer-motion"
import ContactForm from "../components/(inquiries)/ContactForm"
import ContactSocials from "../components/(inquiries)/ContactSocials"

export default function Inquiries() {
  return (
    <div id="inquiries" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
      <div className="flex pl-2 sm:pl-6 md:pl-16 mt-2">
          <p className="font-poppins uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Inquiries
          </p>
        </div>
        <br />
        <div className="flex flex-col md:flex-row mx-auto justify-center mt-16 xs:px-2 sm:px-6 md:px-12 lg:px-16 md:space-x-8">
          <div className="md:w-3/5 lg:w-2/3 2xl:w-3/4 rounded-xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [50, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
          <div className="hidden md:block md:w-2/5 lg:w-1/3 2xl:w-1/4 rounded-xl">
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
  )
}
