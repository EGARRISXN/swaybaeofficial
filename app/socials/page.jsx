// import Animation from "../../components/Animation";
import { Transition } from "../../components/Transition";
import MediaKitContainer from "../../components/(mediakit)/MediaKitContainer";

export default function Socials() {
  return (
    // <Animation>
    <Transition>
      <main>
        <div className="flex flex-col justify-center items-center mx-4 mt-16 sm:mx-16">
          <h1 className="text-4xl animate-pulse text-center pb-6 ">
            Under Construction!
          </h1>

          <MediaKitContainer />
        </div>
      </main>
    </Transition>
    // </Animation>
  );
}
