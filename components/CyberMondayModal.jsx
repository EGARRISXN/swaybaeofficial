"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";

export default function CyberMondayModal() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-[200]"
    >
      <div className="fixed inset-0 flex w-screen justify-center p-8 z-[200]">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80 z-[200]" />
        <Dialog.Panel className="w-fit h-fit max-w-sm max-h-[600px] bg-black border-blue-400 bg-opacity-50 rounded p-4 border-4 z-[300]">
          <Image
            src="/images/cybermonday.png"
            width={415}
            height={737}
            className="w-fit max-h-[500px] object-cover object-center z-[500]"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center absolute top-3 right-3 border-4 text-blue-400 border-blue-400 w-10 h-10 bg-black rounded-full shadow-xl hover:bg-pink-200 transition duration-300 ease-in-out z-[500]"
          >
            X
          </button>
          <Link href="https://sway-bae-shop.fourthwall.com/">
            <button className="flex justify-center items-center mx-auto border-4 rounded border-blue-400 bg-black px-2 mt-4 font-bold text-blue-400 z-[500]">
              Shop Now!
            </button>
          </Link>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
