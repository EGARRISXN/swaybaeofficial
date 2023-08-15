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
// import Eleven from "../../public/images/11.svg";
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
    // { src: Eleven, alt: "11" },
    { src: Twelve, alt: "12" },
    { src: Thirteen, alt: "13" },
    { src: Fourteen, alt: "14" },
    { src: Fifteen, alt: "15" },
    { src: Sixteen, alt: "16" },
    { src: Seventeen, alt: "17" },
    { src: Eighteen, alt: "18" },
    { src: Nineteen, alt: "19" },
    { src: Twenty, alt: "20" },
    { src: TwentyOne, alt: "21" },
    { src: TwentyTwo, alt: "22" },
    { src: TwentyThree, alt: "23" },
    { src: TwentyFour, alt: "24" },
    { src: TwentyFive, alt: "25" },
    { src: TwentySix, alt: "26" },
    { src: TwentySeven, alt: "27" },
    { src: TwentyEight, alt: "28" },
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
    <div className="bg-white border-base-content border-4 rounded-2xl pt-2 pb-4 shadow-2xl shadow-purple-800/50 justify-center items-center mx-auto">
      <div className="justify-center items-center mx-auto">
        <Link href="https://www.twitch.tv/sway_bae">
          <Image
            src={Title}
            width={600}
            height={300}
            alt="Title"
            className="w-600 h-300 hover:scale-110 transition duration-300 ease-in-out"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-center mx-auto">
        <div className="flex flex-col mx-auto">
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
                  className="w-300 h-75"
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

// export default function SubPoster() {
//   return (
//     <div className="border-2 bg-white border-yellow">
//       <Image src={Title} width={1000} height={500} alt="Title" />
//       <Image src={One} width={1000} height={200} alt="1" />
//       <Image src={Two} width={1000} height={200} alt="2" />
//       <Image src={Three} width={1000} height={200} alt="3" />
//       <Image src={Four} width={1000} height={200} alt="4" />
//       <Image src={Five} width={1000} height={200} alt="5" />
//       <Image src={Six} width={1000} height={200} alt="6" />
//       <Image src={Seven} width={1000} height={200} alt="7" />
//       <Image src={Eight} width={1000} height={200} alt="8" />
//       <Image src={Nine} width={1000} height={200} alt="9" />
//       <Image src={Ten} width={1000} height={200} alt="10" />
//       <Image src={Eleven} width={1000} height={200} alt="11" />
//       <Image src={Twelve} width={1000} height={200} alt="12" />
//       <Image src={Thirteen} width={1000} height={200} alt="13" />
//       <Image src={Fourteen} width={1000} height={200} alt="14" />
//       <Image src={Fifteen} width={1000} height={200} alt="15" />
//       <Image src={Sixteen} width={1000} height={200} alt="16" />
//       <Image src={Seventeen} width={1000} height={200} alt="17" />
//       <Image src={Eighteen} width={1000} height={200} alt="18" />
//       <Image src={Nineteen} width={1000} height={200} alt="19" />
//       <Image src={Twenty} width={1000} height={200} alt="20" />
//       <Image src={TwentyOne} width={1000} height={200} alt="21" />
//       <Image src={TwentyTwo} width={1000} height={200} alt="22" />
//       <Image src={TwentyThree} width={1000} height={200} alt="23" />
//       <Image src={TwentyFour} width={1000} height={200} alt="24" />
//       <Image src={TwentyFive} width={1000} height={200} alt="25" />
//       <Image src={TwentySix} width={1000} height={200} alt="26" />
//       <Image src={TwentySeven} width={1000} height={200} alt="27" />
//       <Image src={TwentyEight} width={1000} height={200} alt="28" />
//       <Image src={TwentyNine} width={1000} height={200} alt="29" />
//       <Image src={Thirty} width={1000} height={200} alt="30" />
//       <Image src={ThirtyOne} width={1000} height={200} alt="31" />
//       <Image src={ThirtyTwo} width={1000} height={200} alt="32" />
//       <Image src={ThirtyThree} width={1000} height={200} alt="33" />
//       <Image src={ThirtyFour} width={1000} height={200} alt="34" />
//       <Image src={ThirtyFive} width={1000} height={200} alt="35" />
//       <Image src={ThirtySix} width={1000} height={200} alt="36" />
//       <Image src={ThirtySeven} width={1000} height={200} alt="37" />
//       <Image src={ThirtyEight} width={1000} height={200} alt="38" />
//       <Image src={ThirtyNine} width={1000} height={200} alt="39" />
//       <Image src={Forty} width={1000} height={200} alt="40" />
//       <Image src={FortyOne} width={1000} height={200} alt="41" />
//     </div>
//   );
// }
