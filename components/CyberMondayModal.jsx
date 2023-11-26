"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function CyberMondayModal() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-[100]"
    >
      <div className="fixed inset-0 flex w-screen justify-center p-8">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80 z-[100]" />
        <Dialog.Panel className="w-fit max-w-sm z-[500] bg-base-content border-blue-400 bg-opacity-53 rounded p-4 border-4">
          <video
            autoPlay
            muted
            playsInline
            loop
            src="videos/CyberMondayVideo.mov"
            type="video/mp4"
            title="Cyber Monday Sale"
            className="w-full h-full rounded z-[500]"
          ></video>
          <button
            onClick={() => setIsOpen(false)}
            className="flex justify-center mx-auto border-4 rounded border-blue-400 bg-base-content px-2 font-bold text-blue-400"
          >
            Shop Now!
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center absolute top-3 right-3 border-4 text-blue-400 border-blue-400 w-10 h-10 bg-base-content rounded-full shadow-xl hover:bg-pink-200 transition duration-300 ease-in-out z-[1000]"
          >
            X
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
