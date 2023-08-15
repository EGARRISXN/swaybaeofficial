import Animation from "../../components/Animation";
import AboutPhoto from "../../components/(about)/AboutPhoto";
import NeonCard from "../../components/(neon)/NeonCard";

export default function About() {
  return (
    <Animation>
      <main>
        <div className=" container flex justify-center items-center ">
          <div className="flex flex-col my-10 md:flex-row space-y-6 px-0 md:px-10 md:space-y-0 md:space-x-12">
            <div className="x">
              <NeonCard />
            </div>
            <div className="x">
              <AboutPhoto />
            </div>
          </div>
        </div>
      </main>
    </Animation>
  );
}
