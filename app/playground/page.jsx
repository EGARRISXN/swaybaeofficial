import Image from "next/image";
import Sway from "../../public/images/biff.jpg";

export default function AboutMeBio() {
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <Image src={Sway} className="rounded-lg w-96" alt="sway" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          I&apos;m a Full Time Content Creator as of June 2021. I stream nearly
          daily on Twitch, with daily uploads on YouTube. You can also find me
          on TikTok, Twitter, Threads, Facebook, and Instagram!
          <br />
          Did I ever imagine this would be my lifestyle, even five years ago?
          Nope.
          <br />
          Do I love it? Entirely!
          <br />
          I create family friendly entertainment centered around the concepts of
          positive mental attitude in gaming with the mantra of leaving someones
          day better than I found it.
          <br />
          My favorite part of streaming is my amazing community. You can find
          our Discord as you explore the website, but its a very safe,
          inclusive, supportive, and kind community that we have cultivated that
          I feel incredibly lucky to have in my chat as I stream.
          <br />
          In addition to our amazing community, I am primarily a Hearthstone
          streamer, with a focus on Battlegrounds. I also personally enjoy
          Strategy games in general, Survival games, Indie games, Simulator
          games, and Sonic, the Hedgehog.
          <br />
          If youd like to work with me, Id love to hear from you! You can use
          the Business Inquiries tab above!
          <br />
          As I often say, thank you for being a part of my journey, and allowing
          me to be a part of yours!
          <br />
          Enjoy exploring!
          <br />
          xoxo,
          <br />
          Sway Bae
        </p>
      </div>
    </div>
  );
}

// import CardExample from "../../components/CardExample";
// import DaisyColors from "../../components/DaisyColors";
// import NeonColors from "../../components/(neon)/NeonColors";
// import NeonButton from "../../components/(neon)/NeonButton";
// import NeonCard from "../../components/(neon)/NeonCard";
// import NeonChips from "../../components/(neon)/NeonChips";
// import NeonContainer from "../../components/(neon)/NeonContainer";
// import ReadMoreLess from "../../components/ReadMoreLess";

// export default function Playground() {
//   return (
//     // <main className="container bg-black mx-auto text-center items-center p-16">
//     <main className=" mx-auto p-16">
//       <h1 className="text-3xl">Playground</h1>
//       <br />
//       <DaisyColors />
//       <br />
//       <NeonButton />
//       <br />
//       <NeonColors />
//       <br />
//       <CardExample />
//       <br />
//       <NeonCard />
//       <br />
//       <NeonChips />
//       <br />
//       <NeonContainer />
//     </main>
//   );
// }

// export default function Playground() {
//   return (
//     <main>
//       <div className="container mx-auto">
//         <ReadMoreLess />
//       </div>
//     </main>
//   );
// }
