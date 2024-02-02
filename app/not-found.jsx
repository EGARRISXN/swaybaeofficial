import Image from "next/image";
import Link from "next/link";
import MyButton from "@/components/(ui)/MyButton";

export default function NotFound() {
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
        <span className="text-primary">404</span> | PAGE NOT FOUND
      </p>
      <MyButton>
        <Link href="/">Home</Link>
      </MyButton>
    </main>
  );
}
