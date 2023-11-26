"use client";
import ContactForm from "../components/(inquiries)/ContactForm";
import ContactSocials from "./(inquiries)/ContactSocials";
import MediaKitContainer from "./(inquiries)/MediaKitContainer";

export default function Inquiries() {
  return (
    <div id="inquiries" className="w-full">
      <div className="max-w-[1420px] mx-auto py-16">
        <div className="flex pl-2 sm:pl-6 md:pl-16 mt-2">
          <p className="font-poppins uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Inquiries
          </p>
        </div>
        <br />
        <div className="flex flex-col md:flex-row mx-auto justify-center mt-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 lg:space-x-12 xl:space-x-16 2xl:space-x-20 md:space-x-8">
          <div className="md:w-3/5 lg:w-2/3 2xl:w-3/4 rounded-xl">
            <ContactForm />
          </div>
          <div className="hidden md:block md:w-2/5 lg:w-1/3 2xl:w-1/4 rounded-xl">
            <ContactSocials />
            <MediaKitContainer />
          </div>
          <div className="md:hidden space-y-4 rounded-xl shadow-purple-800/50">
            <ContactSocials mobileStyle />
            <MediaKitContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
