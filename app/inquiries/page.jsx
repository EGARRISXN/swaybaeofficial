import { Transition } from "../../utils/Transition"
import Inquiries from "../../components/Inquiries"

export default function InquiriesPage() {
  return (
    <Transition>
      <main className="mt-5">
      <h1 className="hidden">Inquiries</h1>
        <Inquiries />
      </main>
    </Transition>
  )
}
