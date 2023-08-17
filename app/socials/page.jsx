import Animation from "../../components/Animation";
import TwitchEmbed from "../../components/(socials)/TwitchEmbed";
import MediaKitContainer from "../../components/(mediakit)/MediaKitContainer";

export default function Socials() {
  return (
    <Animation>
      <main>
        <div className="flex flex-col justify-center items-center mx-4 mt-16 sm:mx-16">
          <h1 className="text-4xl animate-pulse text-center pb-6 ">
            Under Construction!
          </h1>
          <p className="text-xs text-primary hidden md:block">
            *Checkout my Subathon in the meantime*
          </p>
          <div className="block md:hidden">
            <MediaKitContainer />
          </div>
          <div className="card p-3 hidden md:block bg-base-200 rounded-xl border-4  border-base-content shadow-xl shadow-purple-800/50 ">
            <TwitchEmbed />
          </div>
        </div>
      </main>
    </Animation>
  );
}
