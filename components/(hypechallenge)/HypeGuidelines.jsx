"use client";
import { useState } from "react";

export default function HypeGuidelines() {
  const guidelineItems = [
    {
      title: "Level 1 - 10,000 EXP || Unlock Theme Weekend",
      content:
        "Friday: Puppy Char-sub-arie Board - Every 10k EXP, Chat feeds an item off the Puppy Charcuterie Board to Biff and Waffles. Saturday: Wheel of Sub-Tunes - Every 10,000 EXP, the wheel is spun with one of the following outcomes: 1hr of 10 channel point song requests, 3 random Country songs added to queue, 3 random Holiday songs added to queue, or 3 random Meme songs added to queue. Sunday: Community Sub-otage Day - Every 500 EXP given, 1 sabotage is granted for Sway on her current game. Sabotages include selling the whole board immediately, leveling no matter what, selling the leftmost or rightmost minion, selling the highest tier minion, Only using last 10 seconds to play turn for rest of game, Ethan plays rest of turn for Sway, and order the board in attack order from left to right.",
    },
    {
      title: "Level 2 - 25,000 EXP || 1 Hour Hearthstone Coaching with Ethan",
      content:
        "Ethan has NO experience with TCGs, let alone Hearthstone. Sway will coach Ethan through one hour of games on her account, NO TUTORIAL - NO BABYSTEPS!",
    },
    {
      title: "Level 3 - 50,000 EXP || Personal Sound Clip Raffle",
      content:
        "If you haven't used soundwaves before on Sway's stream, these are used to trigger the Sway soundboard with funny quips from the stream. Anyone in chat can enter, and five people will win their own personalized sound clip that can be triggered on the stream (must be family-friendly and TOS-acceptable).",
    },
    {
      title: "Level 4 - 100,000 EXP || Spicy Dinner Surprise",
      content:
        "Sway will do a cooking stream, she will make a drink, appetizer, dinner, and dessert. One of each will be spiked with HOT hot sauce. Ethan and Sway will then eat dinner, who will have to suffer through the ridiculously spicy meal!? It's like a horrible roulette that has no winners (except chat).",
    },
    {
      title: "Level 5 - 200,000 EXP || 3v3 Hearthstone",
      content:
        "Battlegrounds Community Tourney Sway will host a 3v3 Hearthstone Battlegrounds Tourney! This is teams of 3 vs. teams of 3, INSANITY! **There will be a partner finder channel in discord to assist anyone that needs to find a partner!**",
    },
    {
      title: "Level 6 - 300,000 EXP || Dinner Date with Chat",
      content:
        "Sway will take chat out on a livestream to a fun dining experience!",
    },
    {
      title: "Level 7 - 500,000 EXP || Merch Giveaway x 3",
      content: "Sway will giveaway 3 t-shirts from her re-done merch store!",
    },
    {
      title: "Level 8 - 650,000 EXP || IRL Arcade Stream",
      content:
        "Sway will livestream from an arcade, and show off her arcade basketball skills and how she's basically the next pro pacman player.",
    },
    {
      title: "Level 9 - 800,000 EXP || Evil Sway at Nite",
      content:
        "It's the moment everyone has been waiting for! This stream will begin with family-friendly Evil Sway, then transition to Evil Sway at Nite (content warning: language), and finally Sway at Nite (content warning: language). The best of all three worlds.",
    },
    {
      title: "Level 10 - 1,000,000 EXP || Vacation Stream",
      content:
        "Sway will take chat on a two-day vacation and stream the ENTIRE thing (except sleeping).",
    },
    {
      title: "Level 11 - 1,500,000 EXP || Extreme Sway Makeover",
      content:
        "Sway will dye her hair the color of chat's choice, build custom crocs with chat, and Ethan will give her his best makeover yet.",
    },
    {
      title: "Level 12 - 3,000,000 EXP || Live Tattoo",
      content:
        "Sway will get tattooed and livestream the process. Chat will vote between 3 choices.",
    },
  ];

  return (
    <diV className="md:pl-4">
      {guidelineItems.map((item, index) => (
        <div
          className="collapse collapse-plus bg-slate-900 border-2 hover:bg-warning my-1"
          key={index}
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-slate-100 font-bold">
            {item.title}
          </div>
          <div className="collapse-content text-slate-100">{item.content}</div>
        </div>
      ))}
    </diV>
  );
}
