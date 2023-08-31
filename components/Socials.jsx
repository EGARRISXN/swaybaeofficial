"use client";
import SpotifyEmbed from "../components/(socials)/SpotifyEmbed";
import SocialCarousel from "../components/(socials)/SocialCarousel";
import GoogleCalendarEmbed from "../components/(socials)/GoogleCalendarEmbed";
import TwitchEmbed from "../components/(socials)/TwitchEmbed";
import YoutubeEmbed from "../components/(socials)/YouTubeEmbed";
import { motion } from "framer-motion";

export default function Socials() {
  return (
    <div id="socials" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between mt-2">
          <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Socials
          </p>

          <div className="mt-16 sm:mt-0 rounded-xl">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [50, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <SpotifyEmbed />
            </motion.div>
          </div>
        </div>

        <br />

        <div className="mx-4 sm:mx-auto xs:mt-0 sm:mt-6 xs:px-2 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-8 3xl:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <SocialCarousel />
          </motion.div>

          <br />

          <div className="grid justify-center shadow-purple-800/50">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <GoogleCalendarEmbed />
            </motion.div>
          </div>

          <br />

          <div className="grid grid-col lg:grid-cols-2 mx-auto gap-10">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="hidden sm:block rounded-2xl border-[6px] border-info shadow-xl shadow-purple-800/50">
                <TwitchEmbed />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="rounded-2xl border-[6px] border-info shadow-xl shadow-purple-800/50">
                <YoutubeEmbed vnum={0} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
