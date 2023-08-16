import Animation from "../../components/Animation";
import AboutPhoto from "../../components/(about)/AboutPhoto";
import NeonCard from "../../components/(neon)/NeonCard";

export default function About() {
  return (
    <Animation>
      <main>
        <div className="flex flex-col justify-center my-16 md:flex-row space-y-6 px-4 md:px-16 md:space-y-0 md:space-x-8 lg:px-20 lg:space-x-10 xl:px-24 xl:space-x-12 2xl:px-28 2xl:space-x-14 3xl:px-32 3xl:space-x-16">
          <div className="x">
            <NeonCard />
          </div>
          <div className="x">
            <AboutPhoto />
          </div>
        </div>
      </main>
    </Animation>
  );
}
