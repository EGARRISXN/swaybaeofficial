"use client";
import { useEffect } from "react";
import Image from "next/image";
import MyButton from "@/components/(ui)/MyButton";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className="flex flex-col mx-auto items-center h-screen mt-16">
      <Image
        src="/BORK.gif"
        alt="404 Page || Bork! Bork! Bork!"
        width={300}
        height={300}
        quality={100}
      />
      <p className="text-2xl font-semibold py-2">
        <span className="text-primary">Oh no!</span> Something went wrong.
      </p>
      <MyButton onClick={reset}>Refresh</MyButton>
    </main>
  );
}
