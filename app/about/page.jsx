import Animation from "../../components/Animation";
import AboutPhoto from "../../components/(about)/AboutPhoto";
import NeonCard from "../../components/(about)/AboutCard";

export default function About() {
  return (
    <Animation>
      <main>
        <div className="flex flex-col-reverse justify-center my-16 md:flex-row px-4 md:px-10 md:space-x-8 lg:px-20 lg:space-x-10 xl:px-24 xl:space-x-12 2xl:space-x-14 3xl:space-x-16">
          <div className="py-5 md:py-8 md:w-1/2 lg:w-2/3 xl:w-2/3 2xl:w-1/2 3xl:w-1/2">
            <NeonCard />
          </div>
          <div className="py-5 md:py-8 md:w-1/2 lg:1/3 xl:w-1/3 2xl:w-1/4 3xl:w-1/4">
            <AboutPhoto />
          </div>
        </div>
      </main>
    </Animation>
  );
}
