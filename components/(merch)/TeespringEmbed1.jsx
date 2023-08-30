import Image from "next/image";
import SwayMerch from "../../public/images/SwayMerch.svg";

export default function TeespringEmbed1() {
  return (
    <div className="border-[10px] border-base-content rounded-xl shadow-xl shadow-purple-800/50">
      <Image
        src={SwayMerch}
        quality={100}
        alt="Merch"
        width="100%"
        height="100%"
        className="w-full rounded-t-sm bg-black"
      />
      <div className="aspect-w-30 aspect-h-22">
        <iframe
          src="https://embed.creator-spring.com/widget?slug=sway-baes-merch-store&per=6&bg=ffffff&txtcolor=000000&currency=&page="
          title="The Official Merch Store for Swaybae!"
          allowFullScreen="true"
          width="100%"
          height="100%"
          className="rounded-b-sm shadow-xl shadow-purple-800/50"
        ></iframe>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import SwayMerch from "../../public/images/SwayMerch.svg";

// export default function TeespringEmbed1() {
//   return (
//     <div className="bg-base-content p-2 rounded-xl shadow-xl shadow-purple-800/50 ">
//       <Image
//         src={SwayMerch}
//         alt="Merch"
//         width={980}
//         height={150}
//         quality={100}
//         className="mx-auto justify-center rounded-t-lg"
//       />
//       <iframe
//         className="rounded-b-lg shadow-xl shadow-purple-800/50"
//         src="https://embed.creator-spring.com/widget?slug=sway-baes-merch-store&per=6&bg=ffffff&txtcolor=000000&currency=&page="
//         title="The Official Merch Store for Swaybae!"
//         allowFullScreen={true}
//         loading="lazy"
//         style={{
//           width: 980,
//           height: 740,
//         }}
//       ></iframe>
//     </div>
//   );
// }
