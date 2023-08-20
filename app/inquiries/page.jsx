import Animation from "../../components/Animation";
import ContactForm from "../../components/(inquiries)/ContactForm";
import ContactList1 from "../../components/(inquiries)/ContactList1";
import ContactList2 from "../../components/(inquiries)/ContactList2";

export default function Inquiries() {
  return (
    <Animation>
      <main>
        <div className="flex flex-col justify-center md:flex-row mx-auto my-16 px-4 sm:px-10 md:px-14 lg:px-24 xl:px-28 3xl:px-32 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14 3xl:space-x-16">
          <div className="md:w-3/5 lg:w-2/3 xl:w-2/3 2xl:w-1/2 3xl:w-1/2">
            <ContactForm />
          </div>
          <div className="hidden md:block md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/4 3xl:w-1/5">
            <ContactList1 />
          </div>
          <div className="md:hidden ">
            <ContactList2 />
          </div>
        </div>
      </main>
    </Animation>
  );
}
