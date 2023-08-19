import Image from "next/image";
import Link from "next/link";
import Title from "../../public/images/title.png";
import One from "../../public/images/1.svg";
import Two from "../../public/images/2.svg";
import Three from "../../public/images/3.svg";
import Four from "../../public/images/4.svg";
import Five from "../../public/images/5.svg";
import Six from "../../public/images/6.svg";
import Seven from "../../public/images/7.svg";
import Eight from "../../public/images/8.svg";
import Nine from "../../public/images/9.svg";
import Ten from "../../public/images/10.svg";
import Eleven from "../../public/images/11.svg";
import Twelve from "../../public/images/12.svg";
import Thirteen from "../../public/images/13.svg";
import Fourteen from "../../public/images/14.svg";
import Fifteen from "../../public/images/15.svg";
import Sixteen from "../../public/images/16.svg";
import Seventeen from "../../public/images/17.svg";
import Eighteen from "../../public/images/18.svg";
import Nineteen from "../../public/images/19.svg";
import Twenty from "../../public/images/20.svg";
import TwentyOne from "../../public/images/21.svg";
import TwentyTwo from "../../public/images/22.svg";
import TwentyThree from "../../public/images/23.svg";
import TwentyFour from "../../public/images/24.svg";
import TwentyFive from "../../public/images/25.svg";
import TwentySix from "../../public/images/26.svg";
import TwentySeven from "../../public/images/27.svg";
import TwentyEight from "../../public/images/28.svg";
import TwentyNine from "../../public/images/29.svg";
import Thirty from "../../public/images/30.svg";
import ThirtyOne from "../../public/images/31.svg";
import ThirtyTwo from "../../public/images/32.svg";
import ThirtyThree from "../../public/images/33.svg";
import ThirtyFour from "../../public/images/34.svg";
import ThirtyFive from "../../public/images/35.svg";
import ThirtySix from "../../public/images/36.svg";
import ThirtySeven from "../../public/images/37.svg";
import ThirtyEight from "../../public/images/38.svg";
import ThirtyNine from "../../public/images/39.svg";
import Forty from "../../public/images/40.svg";
import FortyOne from "../../public/images/41.svg";

export default function SubPoster() {
  const images = [
    { src: One, alt: "1" },
    { src: Two, alt: "2", link: "https://www.twitch.tv/videos/1899219967" },
    { src: Three, alt: "3" },
    { src: Four, alt: "4", link: "https://www.twitch.tv/videos/1899218486" },
    { src: Five, alt: "5", link: "https://www.twitch.tv/videos/1898565061" },
    { src: Six, alt: "6", link: "https://www.twitch.tv/videos/1898565062" },
    { src: Seven, alt: "7" },
    { src: Eight, alt: "8", link: "https://www.twitch.tv/videos/1899221362" },
    { src: Nine, alt: "9", link: "https://www.twitch.tv/videos/1899223254" },
    { src: Ten, alt: "10", link: "https://www.twitch.tv/videos/1899225322" },
    { src: Eleven, alt: "11" },
    {
      src: Thirteen,
      alt: "13",
    },
    {
      src: Fourteen,
      alt: "14",
      link: "https://hsbgclub.com/TournamentInfo?TourneyID=722",
    },
    { src: Fifteen, alt: "15" },
    {
      src: Sixteen,
      alt: "16",
      link: "https://www.twitch.tv/videos/1902055115",
    },
    { src: Seventeen, alt: "17" },
    { src: Eighteen, alt: "18" },
    {
      src: Nineteen,
      alt: "19",
      link: "https://www.twitch.tv/videos/1902059583",
    },
    { src: Twenty, alt: "20", link: "https://www.twitch.tv/videos/1902055113" },
    { src: TwentyOne, alt: "21" },
    {
      src: TwentyTwo,
      alt: "22",
      link: "https://www.twitch.tv/videos/1902059582",
    },
    {
      src: TwentyThree,
      alt: "23",
      link: "https://www.twitch.tv/videos/1902059584",
    },
    {
      src: TwentyFour,
      alt: "24",
      link: "https://www.twitch.tv/videos/1903084506",
    },
    {
      src: TwentyFive,
      alt: "25",
      link: "https://www.twitch.tv/videos/1903069303",
    },
    { src: TwentySix, alt: "26" },
    {
      src: TwentySeven,
      alt: "27",
      link: "https://www.twitch.tv/videos/1903073363",
    },
    {
      src: TwentyEight,
      alt: "28",
      link: "https://www.twitch.tv/videos/1903089039",
    },
    { src: TwentyNine, alt: "29" },
    { src: Thirty, alt: "30" },
    { src: ThirtyOne, alt: "31" },
    { src: ThirtyTwo, alt: "32" },
    { src: ThirtyThree, alt: "33" },
    { src: ThirtyFour, alt: "34" },
    { src: ThirtyFive, alt: "35" },
    { src: ThirtySix, alt: "36" },
    { src: ThirtySeven, alt: "37" },
    { src: ThirtyEight, alt: "38" },
    { src: ThirtyNine, alt: "39" },
    { src: Forty, alt: "40" },
    { src: FortyOne, alt: "41" },
  ];

  // Split the images into two groups
  const firstGroup = images.slice(0, 20);
  const secondGroup = images.slice(20);

  return (
    <div className=" bg-white rounded-3xl shadow-xl p-3 shadow-purple-800/50  border-base-content">
      <div className="justify-center">
        <Link href="https://www.twitch.tv/sway_bae">
          <Image
            src={Title}
            width={560}
            height={300}
            alt="Title"
            className="w-560 h-300 hover:scale-110 mx-auto transition duration-300 ease-in-out"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-center mx-auto">
        <div className="flex flex-col mx-auto ">
          {firstGroup.map((image, index) =>
            image.link ? (
              <Link href={image.link} key={index}>
                <Image
                  src={image.src}
                  width={300}
                  height={75}
                  alt={image.alt}
                  className="w-300 h-75 hover:scale-110 transition duration-300 ease-in-out"
                />
              </Link>
            ) : (
              <Image
                key={index}
                src={image.src}
                width={300}
                height={75}
                alt={image.alt}
                className="w-300 h-75"
              />
            )
          )}
        </div>
        <div className="flex flex-col mx-auto">
          {secondGroup.map((image, index) =>
            image.link ? (
              <Link href={image.link} key={index}>
                <Image
                  src={image.src}
                  width={300}
                  height={75}
                  alt={image.alt}
                  className="w-300 h-75 hover:scale-110 transition duration-300 ease-in-out"
                />
              </Link>
            ) : (
              <Image
                key={index}
                src={image.src}
                width={300}
                height={75}
                alt={image.alt}
                className="w-300 h-75"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
