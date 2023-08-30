"use client";
import { useEffect } from "react";
import Image from "next/image";
import CalendarHeader from "../../public/images/CalendarHeader.svg";

export default function TikTokEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="border-[10px] border-base-content rounded-2xl shadow-2xl shadow-purple-800/50 items-center h-1/3">
      <Image
        src={CalendarHeader}
        quality={100}
        alt="Merch"
        width="100%"
        height="100%"
        className="w-fullrounded-t-md  bg-black"
      />
      <div className="aspect-w-7 aspect-h-16">
        <blockquote
          className="tiktok-embed rounded-2xl shadow-2xl shadow-purple-800/50 "
          title="@sway_baetv on TikTok"
          cite="https://www.tiktok.com/@sway_baetv"
          data-unique-id="sway_baetv"
          data-embed-type="creator"
          width="100%"
          height="100%"
        >
          <section>
            <a
              target="_blank"
              href="https://www.tiktok.com/@sway_baetv?refer=creator_embed"
              className="text-blue-500 underline"
            >
              @sway_baetv
            </a>
          </section>
        </blockquote>
      </div>
    </div>
  );
}

// "use client";
// import { useEffect } from "react";

// export default function TikTokEmbed() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://www.tiktok.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="card bg-base-200 px-3 pt-3 pb-1 w-full shadow-xl shadow-purple-800/50">
//       <blockquote
//         className="tiktok-embed rounded-xl"
//         title="@sway_baetv on TikTok"
//         cite="https://www.tiktok.com/@sway_baetv"
//         data-unique-id="sway_baetv"
//         data-embed-type="creator"
//         justify-content="center"
//         style={{
//           width: 345,
//           height: 375,
//         }}
//       >
//         <section>
//           <a
//             target="_blank"
//             href="https://www.tiktok.com/@sway_baetv?refer=creator_embed"
//             className="text-blue-500 underline"
//           >
//             @sway_baetv
//           </a>
//         </section>
//       </blockquote>
//     </div>
//   );
// }
