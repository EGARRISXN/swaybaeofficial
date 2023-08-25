import { Transition } from "../../components/Transition";
import About from "../../components/About";

export default function AboutPage() {
  return (
    <Transition>
      <main className="mt-2">
        <About />
      </main>
    </Transition>
  );
}
