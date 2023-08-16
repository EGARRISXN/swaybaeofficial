"use client";
import { useState } from "react";

export default function NeonCard() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="bg-base-200 rounded-3xl border-base-300 border-1 shadow-2xl p-6 md:p-8 2xl:p-10 shadow-purple-800/50">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-focus mb-3">
        I&apos;m Sway!
      </h1>
      <hr className="hr-lines border-secondary my-2" />
      <p className="text-base-content mt-4">
        I&apos;m a Full-Time Content Creator as of June 2021. I stream nearly
        daily on Twitch, with daily uploads on YouTube.
        <br />
        <br />
        Did I ever imagine this would be my lifestyle, even five years ago?
        Nope.
        <br />
        <br />
        Do I love it? Entirely!
        <br />
        <br />I create family friendly entertainment centered around the
        concepts of positive mental attitude in gaming with the mantra of
        leaving someone&apos;s day better than I found it.
        <br />
        <br />
        {/* Rest of the content */}
        {isShowMore && (
          <p>
            My favorite part of streaming is my amazing community. You can find
            our Discord as you explore the website, but it&apos;s a very safe,
            inclusive, supportive, and kind community that we have cultivated
            that I feel incredibly lucky to have in my chat as I stream.
            <br />
            <br />
            In addition to our amazing community, I am primarily a Hearthstone
            streamer, with a focus on Battlegrounds. I also personally enjoy
            Strategy games in general, Survival games, Indie games, Simulator
            games, and Sonic, the Hedgehog.
            <br />
            <br />
            As far as Hearthstone goes, few notable accolades include:
            <br />
            <br />
            3rd place in Blizzard&apos;s Hearthstone Battle of the Boars
            Tournament (May 2021)
            <br />
            Casting the Gaming Arena Hearthstone Constructed Tournament. (June
            2021)
            <br />
            Casting and Hosting multiple Dreamhack Community Clash tournaments
            Throughout 2021 and 2022.
            <br />
            Casting for 4 series of Super Girl Gamer Pro so far.
            <br />
            Multiple Battle.net Launcher Features for featured streams or
            YouTube videos created for Hearthstone.
            <br />
            Producing, hosting, and casting one of the earliest, largest
            tournaments for Hearthstone Battlegrounds, with almost 100
            participants!
            <br />
            <br />
            If you&apos;d like to work with me, I&apos;d love to hear from you!
            You can use the Business Inquiries tab above!
            <br />
            <br />
            As I often say, thank you for being a part of my journey, and
            allowing me to be a part of yours!
            <br />
            <br />
            Enjoy exploring!
            <br />
            <br />
            xoxo,
            <br />
            Sway Bae
          </p>
        )}
      </p>
      <br />
      {/* Rest of the code */}
      <div className="flex justify-end mt-4">
        {" "}
        <button
          className="btn btn-secondary btn-md mb-2 w-40"
          onClick={toggleReadMoreLess}
        >
          {isShowMore ? "Read Less" : "Read More"}
        </button>
      </div>
      <hr className="my-4 border-secondary" />
    </div>
  );
}
