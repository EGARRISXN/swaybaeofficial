import { Transition } from "../../components/Transition";
import Socials from "../../components/Socials";

export default function SocialsPage() {
  return (
    <Transition>
      <main className="mt-2">
        <Socials />
      </main>
    </Transition>
  );
}
