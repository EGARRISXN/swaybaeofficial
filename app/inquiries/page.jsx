import { Transition } from "../../components/Transition";
import Inquiries from "../../components/Inquiries";

export default function InquiriesPage() {
  return (
    <Transition>
      <main className="mt-2">
        <Inquiries />
      </main>
    </Transition>
  );
}
