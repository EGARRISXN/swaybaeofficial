import Image from "next/image";
import SwayMerch from "../../public/images/SwayMerch.svg";

export default function TeespringEmbed4() {
  return (
    <div className="bg-base-content p-2 rounded-2xl shadow-2xl shadow-purple-800/50 ">
      <Image
        src={SwayMerch}
        alt="Merch"
        width={600}
        height={150}
        quality={100}
        className="mx-auto justify-center rounded-t-lg"
      />
      <iframe
        className="rounded-b-lg shadow-2xl shadow-purple-800/50"
        src="https://embed.creator-spring.com/widget?slug=sway-baes-merch-store&per=6&bg=ffffff&txtcolor=000000&currency=&page="
        title="The Official Merch Store for Swaybae!"
        allowFullScreen={true}
        loading="lazy"
        style={{
          width: 600,
          height: 740,
        }}
      ></iframe>
    </div>
  );
}
