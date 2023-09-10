import { Transition } from "../../utils/Transition"
import Socials from "../../components/Socials"

export default function SocialsPage() {
  return (
    <Transition>
      <main className="mt-5">
      <h1 className="hidden">Socials</h1>
        <Socials />
      </main>
    </Transition>
  )
}
