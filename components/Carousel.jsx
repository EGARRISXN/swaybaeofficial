"use client";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Image from "next/image";
import Discord from "../public/images/discordblue.jpeg";
import { motion } from "framer-motion";

export default function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <div className="relative mx-auto justify-center items-center">
      <div className="absolute right-0 top-0">
        <button
          onClick={scrollLeft}
          className="p-2 m-2 rounded-full bg-transparent border-secondary border-4"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="p-2 m-2 rounded-full bg-transparentv border-primary border-4"
        >
          <FiChevronRight />
        </button>
      </div>
      <div
        id="content"
        className="carousel py-12 space-x-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide"
      >
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="card bg-base-200 w-[325px] my-2 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
              <figure>
                <Image
                  src={Discord}
                  alt="Social Media"
                  width={350}
                  height={350}
                  className="x"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-3xl">Twitch</h1>
                <p>This is where you will put your words and stuff.</p>
                <div className="card-actions justify-end">
                  <button className="text-sm p-3 mt-4 mb-2 w-36 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Swoosh!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="card bg-base-200 w-[325px] my-2 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
              <figure>
                <Image
                  src={Discord}
                  alt="Social Media"
                  width={350}
                  height={350}
                  className="x"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-3xl">Instagram</h1>
                <p>This is where you will put your words and stuff.</p>
                <div className="card-actions justify-end">
                  <button className="text-sm p-3 mt-4 mb-2 w-36 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Swoosh!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="card bg-base-200 w-[325px] my-2 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
              <figure>
                <Image
                  src={Discord}
                  alt="Social Media"
                  width={350}
                  height={350}
                  className="x"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-3xl">TikTok</h1>
                <p>This is where you will put your words and stuff.</p>
                <div className="card-actions justify-end">
                  <button className="text-sm p-3 mt-4 mb-2 w-36 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Swoosh!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="card bg-base-200 w-[325px] my-2 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
              <figure>
                <Image
                  src={Discord}
                  alt="Social Media"
                  width={350}
                  height={350}
                  className="x"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-3xl">Twitter X</h1>
                <p>This is where you will put your words and stuff.</p>
                <div className="card-actions justify-end">
                  <button className="text-sm p-3 mt-4 mb-2 w-36 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Swoosh!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="card bg-base-200 w-[325px] my-2 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
              <figure>
                <Image
                  src={Discord}
                  alt="Social Media"
                  width={350}
                  height={350}
                  className="x"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-3xl">Discord</h1>
                <p>This is where you will put your words and stuff.</p>
                <div className="card-actions justify-end">
                  <button className="text-sm p-3 mt-4 mb-2 w-36 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Swoosh!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="card bg-base-200 w-[325px] my-2 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
              <figure>
                <Image
                  src={Discord}
                  alt="Social Media"
                  width={350}
                  height={350}
                  className="x"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-3xl">Google Calendar</h1>
                <p>This is where you will put your words and stuff.</p>
                <div className="card-actions justify-end">
                  <button className="text-sm p-3 mt-4 mb-2 w-36 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Swoosh!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="card bg-base-200 w-[325px] my-2 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
              <figure>
                <Image
                  src={Discord}
                  alt="Social Media"
                  width={350}
                  height={350}
                  className="x"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-3xl">Spotify</h1>
                <p>This is where you will put your words and stuff.</p>
                <div className="card-actions justify-end">
                  <button className="text-sm p-3 mt-4 mb-2 w-36 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Swoosh!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="card bg-base-200 w-[325px] my-2 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
              <figure>
                <Image
                  src={Discord}
                  alt="Social Media"
                  width={350}
                  height={350}
                  className="x"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-3xl">Youtube</h1>
                <p>This is where you will put your words and stuff.</p>
                <div className="card-actions justify-end">
                  <button className="text-sm p-3 mt-4 mb-2 w-36 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Swoosh!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
