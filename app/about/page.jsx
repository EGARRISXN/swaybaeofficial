// import Animation from "../../components/Animation";
import { Transition } from "../../components/Transition";
import AboutPhoto from "../../components/(about)/AboutPhoto";
import NeonCard from "../../components/(about)/AboutCard";

export default function About() {
  return (
    // <Animation>
    <Transition>
      <main>
        <div className="flex flex-col-reverse justify-center mx-auto my-16 md:flex-row px-4 sm:px-10 md:px-14 lg:px-24 xl:px-28 3xl:px-32 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14 3xl:space-x-16 ">
          <div className="md:w-3/5 lg:w-2/3 xl:w-2/3 2xl:w-1/2 3xl:w-1/2">
            <NeonCard />
          </div>
          <div className=" md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/4 3xl:w-1/5">
            <AboutPhoto />
          </div>
        </div>
      </main>
    </Transition>
    // </Animation>
  );
}
