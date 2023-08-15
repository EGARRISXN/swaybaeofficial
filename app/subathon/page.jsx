"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SubPoster from "../../components/SubPoster";

export default function Subathon() {
  return (
    <main className="bg-gradient-to-bl bg-base-300 to-black-300 bg-cover">
      <Navbar />
      <div className="flex justify-center">
        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <SubPoster />
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
