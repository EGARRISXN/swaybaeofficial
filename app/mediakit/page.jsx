import { Transition } from "../../utils/Transition"
import MediaKit from "../../components/MediaKit"

export default function MediaKitPage() {
  return (
    <Transition>
      <main className="mt-2">
      <h1 className="hidden">Media Kit</h1>
        <MediaKit />
      </main>
    </Transition>
  )
}
