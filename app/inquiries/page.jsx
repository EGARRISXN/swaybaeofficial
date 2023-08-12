import ContactForm from "../../components/(inquiries)/ContactForm";
import ContactList1 from "../../components/(inquiries)/ContactList1";
import ContactList2 from "../../components/(inquiries)/ContactList2";

export default function Inquiries() {
  return (
    <main>
      <div className="pt-12 md:pt-14 pb-10 xs:pb-16 px-4 justify-center flex flex-col sm:container md:flex-row md:space-x-6 lg:px-16 lg:space-x-8 xl:px-20 xl:space-x-12 2xl:px-24 2xl:space-x-16">
        <div className=" md:w-1/2 lg:w-1/2 xl:w-3/5 2xl:w-3/5 3xl:w-2/3">
          <ContactForm />
        </div>
        <div className="hidden md:block md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/4 3xl:w-1/5">
          <ContactList1 />
        </div>
        <div className="md:hidden pt-8">
          <ContactList2 />
        </div>
      </div>
    </main>
  );
}
