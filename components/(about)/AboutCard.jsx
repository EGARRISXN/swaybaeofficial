"use client";
import { useState } from "react";

export default function NeonCard() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="bg-base-200 rounded-3xl border-base-content border-r-4 border-b-4 shadow-xl p-6 md:p-8 2xl:p-10 shadow-purple-800/50">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-focus mb-3">
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
            <li>
              {" "}
              3rd place in Blizzard&apos;s Hearthstone Battle of the Boars
              Tournament (May 2021)
            </li>
            <li>
              {" "}
              Casting the Gaming Arena Hearthstone Constructed Tournament. (June
              2021)
            </li>
            <li>
              {" "}
              Casting and Hosting multiple Dreamhack Community Clash tournaments
              Throughout 2021 and 2022.
            </li>
            <li>Casting for 4 series of Super Girl Gamer Pro so far.</li>
            <li>
              {" "}
              Multiple Battle.net Launcher Features for featured streams or
              YouTube videos created for Hearthstone.
            </li>{" "}
            <li>
              {" "}
              Producing, hosting, and casting one of the earliest, largest
              tournaments for Hearthstone Battlegrounds, with almost 100
              participants!
            </li>
            <br />
            If you&apos;d like to work with me, I&apos;d love to hear from you!
            You can use the Business Inquiries tab above!
            <br />
            <br />
            As I often say, thank you for being a part of my journey, and
            allowing me to be a part of yours!
            <br />
            <br />
            xoxo,
            <br />
            <b>Sway Bae</b>
          </p>
        )}
      </p>
      <br />
      <div className="flex justify-end mt-4">
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
