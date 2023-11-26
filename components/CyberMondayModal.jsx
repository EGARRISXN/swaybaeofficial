"use client";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export default function CyberMondayModal() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={closeModal} className="relative z-[200]">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col w-full max-w-[320px] transform overflow-hidden rounded-2xl px-6 py-6 pb-7 bg-base-100 shadow-md shadow-base-content/10 transition-all z-[300]">
                <Image
                  src="/images/cybermonday.png"
                  width={415}
                  height={737}
                  className="w-full flex justify-center rounded-2xl p-1 border-2 border-blue-400 shadow-2xl mx-auto z-[500]"
                  priority
                />
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex justify-center items-center absolute top-[7px] right-[7px] border-2 text-blue-400 border-blue-400 w-10 h-10 bg-base-100 rounded-full shadow-2xl hover:bg-pink-200 transition duration-300 ease-in-out z-[500]"
                >
                  X
                </button>
                <Link href="https://sway-bae-shop.fourthwall.com/">
                  <button
                    type="button"
                    className="flex justify-center items-center mx-auto border-2 absolute bottom-2 right-[90px] rounded-xl shadow-2xl hover:bg-pink-200 transition duration-300 ease-in-out border-blue-400 bg-base-100 w-36 h-10 text-blue-400 z-[600]"
                  >
                    Shop Now!
                  </button>
                </Link>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
