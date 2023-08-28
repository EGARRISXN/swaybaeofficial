"use client";
import Link from "next/link";
import Image from "next/image";
import DiscordCard from "../../public/images/DiscordCard.png";
import TwitchCard from "../../public/images/TwitchCard.png";
import InstagramCard from "../../public/images/InstagramCard.png";
import TikTokCard from "../../public/images/TikTokCard.png";
import TwitterCard from "../../public/images/TwitterCard.png";
import YoutubeCard from "../../public/images/YoutubeCard.png";
import SpotifyCard from "../../public/images/SpotifyCard.png";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SocialCarousel() {
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
        className="carousel h-[500px] px-3 space-x-10 flex items-center justify-start scroll-smooth scrollbar-hide"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card bg-base-200 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
            <figure>
              <Image
                src={TwitchCard}
                alt="Twitch"
                width={350}
                height={350}
                className="hover:scale-125 ease-in duration-300"
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title text-3xl">Twitch</h1>
              <p>@sway_bae</p>
              <div className="card-actions justify-end">
                <Link href="https://www.twitch.tv/sway_bae">
                  <button className="btn btn-md btn-secondary mb-4 w-36 2xl:w-44 3xl:w-48 3xl:btn-lg p-3 hover:scale-125 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Streaming Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card bg-base-200 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
            <figure>
              <Image
                src={TikTokCard}
                alt="TikTok"
                width={350}
                height={350}
                className="hover:scale-125 ease-in duration-300"
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title text-3xl">TikTok</h1>
              <p>@sway_baetv</p>
              <div className="card-actions justify-end">
                <Link href="https://www.tiktok.com/@sway_baetv">
                  <button className="btn btn-md btn-secondary mb-4 w-36 2xl:w-44 3xl:w-48 3xl:btn-lg p-3 hover:scale-125 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Follow Along
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card bg-base-200 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
            <figure>
              <Image
                src={TwitterCard}
                alt="Twitter"
                width={350}
                height={350}
                className="hover:scale-125 ease-in duration-300 "
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title text-3xl">Twitter</h1>
              <p>@sway_baetv</p>
              <div className="card-actions justify-end">
                <Link href="https://twitter.com/sway_baetv">
                  <button className="btn btn-md btn-secondary mb-4 w-36 2xl:w-44 3xl:w-48 3xl:btn-lg p-3 hover:scale-125 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Stay Informed
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card bg-base-200 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
            <figure>
              <Image
                src={InstagramCard}
                alt="Instagram"
                width={350}
                height={350}
                className="hover:scale-125 ease-in duration-300 "
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title text-3xl">Instagram</h1>
              <p>@sway_baetv</p>
              <div className="card-actions justify-end">
                <Link href="https://www.instagram.com/sway_baetv">
                  <button className="btn btn-md btn-secondary mb-4 w-36 2xl:w-44 3xl:w-48 3xl:btn-lg p-3 hover:scale-125 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Picture it
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card bg-base-200 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
            <figure>
              <Image
                src={DiscordCard}
                alt="Discord"
                width={350}
                height={350}
                className="hover:scale-125 ease-in duration-300 "
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title text-3xl">Discord</h1>
              <p>@sway_bae</p>
              <div className="card-actions justify-end">
                <Link href="https://discord.com/invite/K73uN9k">
                  <button className="btn btn-md btn-secondary mb-4 w-36 2xl:w-44 3xl:w-48 3xl:btn-lg p-3 hover:scale-125 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Come Hang
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card bg-base-200 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
            <figure>
              <Image
                src={YoutubeCard}
                alt="YouTube"
                width={350}
                height={350}
                className="hover:scale-125 ease-in duration-300 "
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title text-3xl">YouTube</h1>
              <p>@swaybaetv</p>
              <div className="card-actions justify-end">
                <Link href="https://m.youtube.com/channel/UCbpQhE5NYQ05pSp_DJJQxCA">
                  <button className="btn btn-md btn-secondary mb-4 w-36 2xl:w-44 3xl:w-48 3xl:btn-lg p-3 hover:scale-125 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Watch This
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card bg-base-200 border-[6px] border-base-content rounded-3xl shadow-lg shadow-purple-800/50">
            <figure>
              <Image
                src={SpotifyCard}
                alt="Spotify"
                width={350}
                height={350}
                className="hover:scale-125 ease-in duration-300 "
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title text-3xl">Spotify</h1>
              <p>@Sway Bae</p>
              <div className="card-actions justify-end">
                <Link href="https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq">
                  <button className="btn btn-md btn-secondary mb-4 w-36 2xl:w-44 3xl:w-48 3xl:btn-lg p-3 hover:scale-125 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                    Listen Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
