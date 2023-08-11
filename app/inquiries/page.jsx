import ContactForm from "../../components/(inquiries)/ContactForm";
import ContactList1 from "../../components/(inquiries)/ContactList1";
import ContactList2 from "../../components/(inquiries)/ContactList2";

export default function Inquiries() {
  return (
    <main>
      <div className="space-x-0 md:space-x-16 px-16 py-16 justify-center flex flex-col md:flex-row md:container md:mx-auto">
        <div className="lg:w-full">
          <ContactForm />
        </div>
        <div className="hidden md:block">
          <ContactList1 />
        </div>
        <div className="md:hidden pt-8">
          <ContactList2 />
        </div>
      </div>
    </main>
  );
}
