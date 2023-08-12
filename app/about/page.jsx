"use client";
import React from "react";
import Image from "next/image";
import Sway from "../../public/images/biff.jpg";

export default function About() {
  return (
    <main>
      <div className="container border-2 border-yellow-300 p-16 space-x-16 justify-center items-center flex flex-row ">
        <article className=" prose border-2 border-yellow-300 rounded-xl shadow-xl shadow-purple-800/50">
          <h1 className="text-4xl font-semibold ">
            Welcome
            <br />
            I&#39;m Sway!
          </h1>

          <p>
            I&#39;m a Full Time Content Creator as of June 2021. I stream nearly
            daily on Twitch, with daily uploads on YouTube. You can also find me
            on TikTok, Twitter, Threads, Facebook, and Instagram!
          </p>
          <p>
            Did I ever imagine this would be my lifestyle, even five years ago?
            Nope.
          </p>
          <p>Do I love it? Entirely!</p>
          <p>
            I create family friendly entertainment centered around the concepts
            of positive mental attitude in gaming with the mantra of leaving
            someone&#39;s day better than I found it.
          </p>
          <p>
            My favorite part of streaming is my amazing community. You can find
            our Discord as you explore the website, but it&#39;s a very safe,
            inclusive, supportive, and kind community that we have cultivated
            that I feel incredibly lucky to have in my chat as I stream.
          </p>
          <p>
            In addition to our amazing community, I am primarily a Hearthstone
            streamer, with a focus on Battlegrounds. I also personally enjoy
            Strategy games in general, Survival games, Indie games, Simulator
            games, and Sonic, the Hedgehog.
          </p>
          <p>
            As far as Hearthstone goes, few notable accolades include:
            <br />
            3rd place in Blizzard&#39;s Hearthstone Battle of the Boars
            Tournament (May 2021)
            <br />
            Casting the Gaming Arena Hearthstone Constructed Tournament (June
            2021)
            <br />
            Casting and Hosting multiple Dreamhack Community Clash tournaments
            Throughout 2021 and 2022.
            <br />
            Casting for 4 series of Super Girl Gamer Pro so far.
            <br />
            Multiple Battle.net Launcher Features for featured streams or
            YouTube videos created for Hearthstone. <br />
            Producing, hosting, and casting one of the earliest, largest
            tournaments for Hearthstone Battlegrounds, with almost 100
            participants!
          </p>
          <p>
            If you&#39;d like to work with me, I&#39;d love to hear from you!
            You can use the Business Inquiries tab above!
          </p>
          <p>
            As I often say, thank you for being a part of my journey, and
            allowing me to be a part of yours!
          </p>
          <p>Enjoy exploring!</p>
          <p>
            xoxo,
            <br />
            Sway Bae
          </p>
        </article>

        <div className="border-2 border-yellow-300 shadow-xl rounded-xl shadow-purple-800/50 opacity-80 ">
          <Image
            src={Sway}
            alt="Sway"
            quality={100}
            className="w-full h-full rounded-2xl"
            priority={true}
          />
        </div>
      </div>
    </main>
  );
}

// import React from "react";
// import Image from "next/image";
// import Sway from "../../public/images/biff.jpg";

// export default function About() {
//   return (
//     <main className="hero">
//       <div className="hero-content flex-col-reverse lg:flex-row">
//         <div className=" rounded-2xl shadow-2xl shadow-purple-800/50 slide-in-bottom-h1 border-slate-300 border-2 p-6 m-8">
//           <h1 className="text-2xl font-semibold italic text-center text-black-300">
//             Hey{" "}
//             <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block bounce-top-icons">
//               <span className="relative text-white">Swaybae </span>
//             </span>{" "}
//             Here!
//           </h1>
//           <p className="py-6">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//             <br />
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//             <br />
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>
//           <div className="flex justify-end">
//             <button className="btn btn-secondary border-slate-300 border-2 text-white">
//               Get Started
//             </button>
//           </div>
//         </div>
//         <div className="flex-grow flex justify-end fade-in mt-10 postition-sticky sticky bottom-0">
//           <Image
//             src={Sway}
//             alt="Sway"
//             quality={100}
//             className="max-w-sm max-h-sm fade-in"
//             priority={true}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }
