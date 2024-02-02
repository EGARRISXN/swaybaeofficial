"use client";
import ContactForm from "@/components/(inquiries)/ContactForm";
import ContactSocials from "@/components/(inquiries)/ContactSocials";
import MediaKitContainer from "@/components/(inquiries)/MediaKitContainer";
import PageName from "@/components/(ui)/PageName";

export default function Inquiries() {
  return (
    <div id="inquiries" className="w-full">
      <div className="max-w-[1420px] mx-auto pt-4 pb-16 lg:pt-16">
        <PageName>Inquiries</PageName>
        <br />
        <div className="flex flex-col md:flex-row mx-auto justify-center mt-4 lg:mt-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20">
          <div className="md:w-3/5 2xl:w-2/3 rounded-xl">
            <ContactForm />
          </div>
          <div className="hidden md:block md:w-2/5 2xl:w-1/3 rounded-xl">
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
