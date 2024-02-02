import AboutPhoto from "@/components/(about)/AboutPhoto";
import AboutCard from "@/components/(about)/AboutCard";
import PageName from "@/components/(ui)/PageName";

export default function About() {
  return (
    <div id="about" className="w-full">
      <div className="max-w-[1420px] mx-auto pt-4 pb-16 lg:pt-16">
        <PageName>About</PageName>
        <br />
        <div className="flex flex-col-reverse mx-auto justify-center mt-4 lg:mt-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 sm:gap-y-12 md:flex-row md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20">
          <div className="md:w-3/5 xl:w-2/3">
            <AboutCard />
          </div>

          <div className="md:w-2/5 xl:w-1/3">
            <AboutPhoto />
          </div>
        </div>
      </div>
    </div>
  );
}
