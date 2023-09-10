import { Transition } from "../../utils/Transition"
import About from "../../components/About"

export default function AboutPage() {
  return (
    <Transition>
      <main className="mt-5">
      <h1 className="hidden">About</h1>
        <About />
      </main>
    </Transition>
  )
}
