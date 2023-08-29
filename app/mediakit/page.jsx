import { Transition } from "../../utils/Transition";
import MediaKit from "../../components/MediaKit";

export default function MediaKitPage() {
  return (
    <Transition>
      <main className="mt-2">
        <MediaKit />
      </main>
    </Transition>
  );
}
