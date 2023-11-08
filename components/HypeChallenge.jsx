import Image from "next/image";
import Link from "next/link";

export default function HypeChallenge() {
  return (
    <div id="hype" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex flex-col items-center mt-4 xs:px-2 sm:px-6">
          <div className="hover:animate-pulse">
            <Link href="/">
              <Image
                src="/images/hypelogo.png"
                quality={100}
                width={830}
                height={448}
                alt="HypeLogo"
                priority
              />
              <p className="text-center text-base-content lg:text-lg font-bold hover:text-error z-50 mt-[-20px] lg:mt-[-40px]">
                Come <span className="text-primary">Join</span> the Hype!
              </p>
            </Link>
          </div>
          <br />
          <p className="text-center underline text-xl xl:text-2xl hidden lg:block font-bold py-2 px-0">
            1 Bit = 1 EXP | Prime Sub = 500 EXP | Tier 1 Sub = 500 EXP | Tier 2
            Sub = 1,000 EXP | Tier 3 Sub = 2,500 EXP
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div>
              <div className="mt-6 md:mt-0 border-8 border-info shadow-xl shadow-purple-800/50">
                <Image
                  src="/images/hypegoals.PNG"
                  quality={100}
                  width={2000}
                  height={2000}
                  alt="HypeGoals"
                  priority
                />
              </div>
            </div>
            <div className="mt-6 xl:mt-0">
              <p className="text-center text-lg font-bold lg:hidden pb-3">
                <span className="text-xl font-extrabold">1 Bit = 1 EXP</span>
                <br />
                Prime Sub = 500 EXP
                <br />
                Tier 1 Sub = 500 EXP
                <br />
                Tier 2 Sub = 1,000 EXP
                <br />
                Tier 3 Sub = 2,500 EXP
                <br />
              </p>

              <div className="pl-0 xl:pl-4">
                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 1 - 10,000 EXP || Unlock Theme Weekend
                  </div>
                  <div className="collapse-content text-base-content">
                    <span className="font-bold">Friday: </span>
                    <span className="italic">Puppy Char-sub-arie Board</span> -
                    Every 10,000 EXP, Chat feeds an item off of the Puppy
                    Charcuterie Board to Biff and Waffles.
                    <br />
                    <br />
                    <span className="font-bold">Saturday: </span>
                    <span className="italic">Wheel of Sub-Tunes</span> - Every
                    10,000 EXP, the wheel is spun with one of the following
                    outcomes: 1 hour of 10 channel point song requests, 3 random
                    Country songs added to queue, 3 random Holiday songs added
                    to queue, or 3 random Meme songs added to queue.
                    <br />
                    <br />
                    <span className="font-bold">Sunday: </span>
                    <span className="italic">Community Sub-otage Day</span> -
                    Every 500 EXP given, 1 sabotage is granted for Sway on her
                    current game. Sabotages include selling the whole board
                    immediately, leveling no matter what, selling the leftmost
                    or rightmost minion, selling the highest tier minion, Only
                    using last 10 seconds to play turn for rest of game.
                  </div>
                </div>

                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 2 - 25,000 EXP || 1 Hour Hearthstone Coaching with
                    Ethan
                  </div>
                  <div className="collapse-content text-base-content">
                    Ethan has NO experience with TCGs, let alone Hearthstone.
                    Sway will coach Ethan through 1 hour of games on her
                    account.
                    <br />
                    <br />
                    NO TUTORIAL - NO BABYSTEPS!
                  </div>
                </div>

                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 3 - 50,000 EXP || Personal Sound Clip Raffle
                  </div>
                  <div className="collapse-content text-base-content">
                    If you haven't used soundwaves before on Sway's stream,
                    these are used to trigger the Sway soundboard with funny
                    quips from the stream. Anyone in chat can enter, and five
                    people will win their own personalized sound clip that can
                    be triggered on the stream
                    <br />
                    <br />
                    *Must be family-friendly and TOS-acceptable*
                  </div>
                </div>

                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 4 - 100,000 EXP || Spicy Dinner Surprise
                  </div>
                  <div className="collapse-content text-base-content">
                    Sway does a live cooking stream! She will make drinks,
                    appetizer, dinner, and dessert, BUT WITH A CATCH. A piece of
                    each item (or one of the drinks) will be spiked with
                    EXREMELY HOT hot sauce. Ethan and Sway will then indulge in
                    dinner hoping to luck out of the spiciness!! It's like a
                    horrible roulette that has no winners (except chat).
                  </div>
                </div>

                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 5 - 200,000 EXP || 3v3 Hearthstone
                  </div>
                  <div className="collapse-content text-base-content">
                    Battlegrounds Community Tourney Sway will host a 3v3
                    Hearthstone Battlegrounds Tourney! This is teams of 3 vs.
                    teams of 3, INSANITY! There{" "}
                    <span className="font-bold">will</span> be a partner finder
                    channel in Discord to assist anyone that needs to find a
                    partner!
                  </div>
                </div>

                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 6 - 300,000 EXP || Dinner Date with Chat
                  </div>
                  <div className="collapse-content text-base-content">
                    Sway takes chat out on a fun, livestream dining experience!
                  </div>
                </div>

                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 7 - 500,000 EXP || Merch Giveaway x 3
                  </div>
                  <div className="collapse-content text-base-content">
                    Sway runs a giveaway with 3 shirts from her re-done merch
                    store!
                  </div>
                </div>

                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 8 - 650,000 EXP || IRL Arcade Stream
                  </div>
                  <div className="collapse-content text-base-content">
                    Sway livestreams from an arcade, showing off her arcade
                    basketball skills, wack-a-mole precision, and how she's
                    basically the next pro Pacman player.
                  </div>
                </div>

                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 9 - 800,000 EXP || Evil Sway at Nite
                  </div>
                  <div className="collapse-content text-base-content">
                    It's the moment everyone has been waiting for! This stream
                    will begin with family-friendly Evil Sway, then transition
                    into Evil Sway at Nite, and finally end the night with Sway
                    at Nite. The best *or worst* of all three worlds.
                    <br />
                    <br />
                    **PARENTIAL ADVISORY: EXPLICIT CONTENT**
                  </div>
                </div>

                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 10 - 1,000,000 EXP || Vacation Stream
                  </div>
                  <div className="collapse-content text-base-content">
                    Sway take's chat on a two-day vacation and stream the ENTIRE
                    thing (except sleepytime).
                  </div>
                </div>

                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 11 - 1,500,000 EXP || Extreme Sway Makeover
                  </div>
                  <div className="collapse-content text-base-content">
                    Sway dyes her hair a color of chat's choice. Sway builds
                    custom crocs with help from chat. Sway gets her makeup done
                    by not-so-professional makeup artist, Ethan. This will be
                    the BEST makeover in existence of makeovers.
                  </div>
                </div>

                <div className="collapse collapse-plus bg-warning border-2 border-base-content my-1">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-accent font-bold">
                    Level 12 - 3,000,000 EXP || Live Tattoo Session
                  </div>
                  <div className="collapse-content text-base-content">
                    Sway gets tattooed and livestreams the ENTIRE THING! Along
                    with that, Chat will get to decide what tattoo Sway gets.
                    Sway will provide 3 options, and chat will vote between the
                    choices. <span className="font-bold">INSANE!!!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
