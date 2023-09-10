import { Transition } from "../../utils/Transition"
import Subathon from "../../components/Subathon"

export default function SubathonPage() {
  return (
    <Transition>
      <main className="mt-5">
      <h1 className="hidden">Subathon 2023</h1>
        <Subathon />
      </main>
    </Transition>
  )
}
