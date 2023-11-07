"use client";
import { useState } from "react";

export default function AboutCard() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="text-base-content">
      <h4 className="font-bold">
        1 Bit = 1 EXP
        <br />
        Prime Sub = 500 EXP
        <br />
        Tier 1 Sub = 500 EXP
        <br />
        Tier 2 Sub = 1,000 EXP
        <br />
        Tier 3 Sub = 2,500 EXP
        <br />
        <br />
      </h4>
      <p className="x">
        Level 1 - 10,000 EXP || Unlock Theme Weekend
        <br />
        Friday: Puppy Char-sub-arie Board - Every 10k EXP, Chat gets to feed an
        item off of the Puppy Charcuterie Board to Biff and Waffles for the
        whole stream.
        <br />
        Saturday: Wheel of Sub-Tunes - Every 10,000 EXP, the wheel is spun with
        one of the following outcomes: 1 hour of 10 channel point song requests,
        3 random country songs added to the queue, 3 random Holiday songs added
        to the queue, or 3 random meme songs added to queue for the whole
        stream.
        <br />
        Sunday: Community Sub-otage Day - Every 500 EXP = 1 sabotage for Sway
        for her current game. Sabotages include selling whole board immediately,
        leveling no matter what (if she can't level she has to concede), selling
        rightmost minion, selling leftmost minion, selling highest tier minion
        (if multiple then highest value), Only using last 10 seconds to play
        turn for rest of game, Ethan plays the rest of this turn for Sway, order
        board in attack order from left to right.
        <br />
        <br />
        Level 2 - 25,000 EXP || 1 Hour Hearthstone Coaching with Ethan
        <br />
        Ethan has NO experience with TCGs, let alone Hearthstone. Sway will
        coach Ethan through one hour of games on her account, NO TUTORIAL - NO
        BABYSTEPS!
        <br />
        <br />
        Level 3 - 50,000 EXP || Personal Sound Clip Raffle
        <br />
        If you haven't used soundwaves before on Sway's stream, these are used
        to trigger the Sway soundboard with funny quips from stream. Anyone in
        chat can enter and five people will win their own personalized sound
        clip that can be triggered on stream (must be family friendly and
        TOS-acceptable).
        <br />
        <br />
        {/* Rest of the content */}
        {isShowMore && (
          <p className="x">
            Level 4 - 100,000 EXP || Spicy Dinner Surprise
            <br />
            Sway will do a cooking stream, she will make a drink, appetizer,
            dinner, and dessert. One of each will be spiked with HOT hot sauce.
            Ethan and Sway will then eat dinner, who will have to suffer through
            the ridiculously spicy meal!? It's like a horrible roulette that has
            no winners (except chat).
            <br />
            <br />
            Level 5 - 200,000 EXP || 3v3 Hearthstone
            <br />
            Battlegrounds Community Tourney Sway will host a 3v3 Hearthstone
            Battlegrounds Tourney! This is teams of 3 vs teams of 3, INSANITY!
            **There will be a partner finder channel in discord to assist anyone
            that needs to find a partner!**
            <br />
            <br />
            Level 6 - 300,000 EXP || Dinner Date
            <br />
            with Chat Sway will take chat out on a livestream to a fun dining
            experience!
            <br />
            <br />
            Level 7 - 500,000 EXP || Merch Giveaway x 3
            <br />
            Sway will giveaway 3 t-shirts from her re-done merch store!
            <br />
            <br />
            Level 8 - 650,000 EXP || IRL Arcade Stream
            <br />
            Sway will livestream from an arcade, and show off her arcade
            basketball skills and how she's basically the next pro pacman
            player.
            <br />
            <br />
            Level 9 - 800,000 EXP || Evil Sway at Nite
            <br />
            It's the moment everyone has been waiting for! This stream will
            begin with family friendly Evil Sway, then transition to Evil Sway
            at Nite (content warning: language), and finally Sway at Nite
            (content warning: language). The best of all three worlds.
            <br />
            <br />
            Level 10 - 1,000,000 EXP || Vacation Stream
            <br />
            Sway will take chat on a two day vacation and stream the ENTIRE
            thing (except sleeping).
            <br />
            <br />
            Level 11 - 1,500,000 EXP || Extreme Sway Makeover
            <br />
            Sway will dye her hair the color of chat's choice, build custom
            crocs with chat, and Ethan will give her his best makeover yet.
            <br />
            <br />
            Level 12 - 3,000,000 EXP || Live Tattoo
            <br />
            Sway will get tattooed and livestream the process. Chat will vote
            between 3 choices.
          </p>
        )}
      </p>
      <br />
      <div className="flex justify-center">
        <button
          className="btn btn-md btn-secondary w-36 hover:scale-110 ease-in duration-500 shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 text-white"
          onClick={toggleReadMoreLess}
        >
          {isShowMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
