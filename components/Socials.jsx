"use client"
import { motion } from "framer-motion"
import SpotifyEmbed from "../components/(socials)/SpotifyEmbed"
import SocialCarousel from "../components/(socials)/SocialCarousel"
import GoogleCalendarEmbed from "../components/(socials)/GoogleCalendarEmbed"
import TwitchEmbed from "../components/(socials)/TwitchEmbed"
import YoutubeEmbed from "../components/(socials)/YouTubeEmbed"

export default function Socials() {
  return (
    <div id="socials" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex flex-col sm:flex-row px-2 sm:px-6 md:pl-16 md:pr-16 3xl:pr-10 justify-between mt-2">
          <h1 className="font-poppins uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Socials
          </h1>
          <div className="mt-16 sm:mt-0">
            <SpotifyEmbed />
          </div>
        </div>
        <br />

        <div className="mx-auto xs:px-2 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-8">

        <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
          <SocialCarousel />
          </motion.div>
          <br />

          <div className="shadow-purple-800/50 mx-auto mt-6 sm:mt-10">
              <GoogleCalendarEmbed />
          </div>

          <br />

          <div className="grid grid-col lg:grid-cols-2 gap-x-2 mx-auto mt-6 sm:mt-10">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="text-center font-semibold text-accent">
                Latest Youtube Video
              </p>
              <div className="rounded-2xl shadow-xl shadow-purple-800/50">
              <YoutubeEmbed vnum={0} />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="hidden lg:block text-center font-semibold text-accent">
              Live Twitch Stream
              </p>
              <div className="hidden lg:block rounded-2xl shadow-xl shadow-purple-800/50">
                <TwitchEmbed />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}


