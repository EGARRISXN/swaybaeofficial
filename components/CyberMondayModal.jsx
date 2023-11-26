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
          <div className="flex min-h-full justify-center items-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col transform overflow-hidden rounded-2xl p-6 bg-white shadow-xl transition-all z-[300]">
                <Image
                  src="/images/cybermonday.png"
                  width={540}
                  height={960}
                  className="flex justify-center rounded-2xl p-2 saturate-[1.25] border-2 border-blue-400 shadow-xl mx-auto z-[500]"
                  priority
                />
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex justify-center items-center absolute top-[8px] right-[8px] border-2 text-blue-400 border-blue-400 w-12 h-12 bg-white rounded-full shadow-xl hover:bg-pink-200 transition duration-300 ease-in-out z-[600]"
                >
                  X
                </button>
                <Link href="https://sway-bae-shop.fourthwall.com/">
                  <button
                    type="button"
                    className="flex justify-center items-center mx-auto border-2 rounded-xl mt-2 w-full shadow-2xl hover:bg-pink-200 transition duration-300 ease-in-out border-blue-400 bg-white btn h-10 text-blue-400"
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
