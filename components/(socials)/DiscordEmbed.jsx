"use client";
import Image from "next/image";
import Discord from "../../public/images/discord.png";

export default function DiscordEmbed() {
  const handleDiscordButtonClick = () => {
    window.location.href = "https://discord.com/invite/K73uN9k";
  };

  return (
    <button
      className="btn btn-lg rounded-none justify-center btn-primary mb-2"
      onClick={handleDiscordButtonClick}
    >
      <Image
        src={Discord}
        alt="Discord"
        height={50}
        width={50}
        className="poop"
      />
      <p className="poop">Discord</p>
    </button>
  );
}

// export default function DiscordEmbed() {
//   return (
//     <div className="card bg-base-200 p-3 w-full shadow-xl shadow-purple-800/50 ">
//       <iframe
//         className="discord-embed rounded-md"
//         src="https://discord.com/widget?id=530445935767978016&theme=dark"
//         allowFullScreen="true"
//         sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
//         loading="lazy"
//         style={{
//           width: 345,
//           height: 330,
//         }}
//       ></iframe>
//     </div>
//   );
// }
