import { Transition } from "../../utils/Transition";
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
