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
        <Dialog.Overlay className="fixed inset-0 bg-black bg-blur opacity-80 z-[100]" />
        <Dialog.Panel className="w-fit border-4 rounded-md border-blue-500 bg-transparent z-[500]">
          <video
            autoPlay
            muted
            playsInline
            loop
            src="videos/CyberMondayVideo.mov"
            type="video/mp4"
            title="Cyber Monday Sale"
            className="w-full h-full z-[500] rounded-sm bg-base-100 p-4"
          ></video>
          <button
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center absolute top-3 right-3 w-10 h-10 border-4 border-blue-400 bg-base-100 rounded-full text-base-content shadow-3xl hover:bg-pink-200 transition duration-300 ease-in-out z-[1000]"
          >
            X
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
