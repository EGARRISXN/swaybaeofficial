import { Transition } from "../../components/Transition";
import Subathon from "../../components/Subathon";

export default function SubathonPage() {
  return (
    <Transition>
      <main className="mt-2">
        <Subathon />
      </main>
    </Transition>
  );
}
