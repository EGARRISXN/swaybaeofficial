import { Transition } from "../../utils/Transition"
import Calendar from "../../components/Calendar"

export default function CalendarPage() {
  return (
    <Transition>
      <main className="mt-5">
      <h1 className="hidden">Calendar</h1>
        <Calendar />
      </main>
    </Transition>
  )
}