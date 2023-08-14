"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SubathonPoster from "../../components/SubathonPoster";

export default function Subathon() {
  return (
    <main className="bg-gradient-to-bl bg-base-300 to-black-300 bg-cover">
      <Navbar />
      <div className="justify-center items-center flex">
        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <SubathonPoster />
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
