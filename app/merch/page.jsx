import { Transition } from "../../components/Transition";
import Merch from "../../components/Merch";

export default function MerchPage() {
  return (
    <Transition>
      <main className="mt-2">
        <Merch />
      </main>
    </Transition>
  );
}
