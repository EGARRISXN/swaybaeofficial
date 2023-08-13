import { useState } from "react";

export default function NeonCard() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className="flex card">
      <div className="border-base-content border-1 rounded-3xl shadow-xl shadow-purple-800/50 p-3">
        <h1 className="text">I&apos;mSway!</h1>
        <hr className="my-2" />
        <p>
          I&apos;ma Full Time Content Creator as of June 2021. I stream nearly
          daily on Twitch, with daily uploads on YouTube. You can also find me
          on TikTok, Twitter, Threads, Facebook, and Instagram!
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
          leaving someones day better than I found it.
        </p>
        {isShowMore && (
          <p>
            My favorite part of streaming is my amazing community. You can find
            our Discord as you explore the website, but its a very safe,
            inclusive, supportive, and kind community that we have cultivated
            that I feel incredibly lucky to have in my chat as I stream.
            <br />
            In addition to our amazing community, I am primarily a Hearthstone
            streamer, with a focus on Battlegrounds. I also personally enjoy
            Strategy games in general, Survival games, Indie games, Simulator
            games, and Sonic, the Hedgehog.
            <br />
            <br />
            As far as Hearthstone goes, few notable accolades include:
            <br />
            3rd place in Blizzards Hearthstone Battle of the Boars Tournament
            May 2021
            <br />
            Casting the Gaming Arena Hearthstone Constructed Tournament June
            2021
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
            If youd like to work with me, Id love to hear from you! You can use
            the Business Inquiries tab above!
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
            <br />
            Sway Bae
          </p>
        )}

        <button className="btn btn-primary" onClick={toggleReadMoreLess}>
          {isShowMore ? "Read Less" : "Read More"}
        </button>
      </div>
      <div className="animate-pulse border-2 border-pink-500 blur-lg"></div>
    </div>
  );
}
