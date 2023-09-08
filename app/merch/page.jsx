import { Transition } from "../../utils/Transition"
import Merch from "../../components/Merch"

export default function MerchPage() {
  return (
    <Transition>
      <main className="mt-2">
      <h1 className="hidden">Merch</h1>
        <Merch />
      </main>
    </Transition>
  )
}
