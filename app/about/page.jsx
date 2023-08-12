"use client";
import Framer from "../framer";
import AboutMeBio from "../../components/(about)/AboutMeBio";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Framer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio />
      </motion.div>
    </Framer>
  );
};

export default About;

// import Neon2 from "../../components/(about)/Neon2";
// import AboutText from "../../components/(about)/AboutText";
// import AboutPhoto from "../../components/(about)/AboutPhoto";

// export default function About() {
//   return (
//     <main>
//       <div className="container border-2 border-yellow-300 justify-center flex">
//         {/* <Neon /> */}
//         <div className="flex flex-col border-2 border-yellow-300">
//           <Neon2 />
//           <AboutText />
//         </div>
//         <div className="flex flex-col border-2 border-yellow-300">
//           <AboutPhoto />
//         </div>
//       </div>
//     </main>
//   );
// }
