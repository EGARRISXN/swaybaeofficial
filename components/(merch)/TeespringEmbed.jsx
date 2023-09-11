import Image from "next/image"
import SwayMerch from "../../public/images/merchhead.png"

export default function TeespringEmbed() {
  return (
    <div className="border-[10px] border-info rounded-xl shadow-xl shadow-purple-800/50">
      <Image
        src={SwayMerch}
        quality={100}
        alt="Merch"
        width="100%"
        height="100%"
        className="w-full rounded-t-sm bg-black"
      />
      <div className="aspect-w-22 aspect-h-30 sm:aspect-w-30 sm:aspect-h-22">
        <iframe
          src="https://embed.creator-spring.com/widget?slug=sway-baes-merch-store&per=12&bg=ffffff&txtcolor=000000&currency=&page="
          title="The Official Merch Store for Swaybae!"
          allowFullScreen
          width="100%"
          height="100%"
          className="rounded-b-sm shadow-xl shadow-purple-800/50"
        ></iframe>
      </div>
    </div>
  )
}
