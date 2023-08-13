import Animation from "../components/Animation";
import NeonSway from "../components/NeonSway";

export default function Home() {
  return (
    <Animation>
      <main className="flex justify-center">
        <div className="mt-16 pt-16 ">
          <NeonSway />
        </div>
      </main>
    </Animation>
  );
}
