import ContactForm from "../../components/ContactForm";
import ContactList1 from "../../components/ContactList1";
import ContactList2 from "../../components/ContactList2";

export default function Inquire() {
  return (
    <main>
      <div className="container mx-auto justify-center flex flex-col md:flex-row px-8 lg:px-16 py-16 space-x-0 md:space-x-16">
        <div className="lg:w-full">
          <ContactForm />
        </div>
        <div className="hidden md:block">
          <ContactList1 />
        </div>
        <div className="md:hidden pt-10">
          <ContactList2 />
        </div>
      </div>
    </main>
  );
}
