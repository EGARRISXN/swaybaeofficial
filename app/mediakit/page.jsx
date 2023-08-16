import Animation from "../../components/Animation";
import MediaKitContainer from "../../components/(mediakit)/MediaKitContainer";

export default function MediaKit() {
  return (
    <Animation>
      <main>
        <div className="flex flex-col items-center justify-center mt-16 mx-4 sm:mx-16">
          <h1 className="text-4xl animate-pulse text-center pb-6">
            Under Construction!
          </h1>
          <MediaKitContainer />
        </div>
      </main>
    </Animation>
  );
}
