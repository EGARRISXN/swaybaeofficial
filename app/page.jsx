import { Transition } from "../components/Transition";
import Hero from "../components/Hero";
import About from "../components/About";
import Socials from "../components/Socials";
import Merch from "../components/Merch";
import Inquiries from "../components/Inquiries";

export default function Home() {
  return (
    <Transition>
      <main className="flex flex-col">
        <Hero />
        <hr className="container mx-auto border-2 border-purple-800/50" />
        <About />
        <hr className="container mx-auto border-2 border-purple-800/50" />
        <Socials />
        <hr className="container mx-auto border-2 border-purple-800/50" />
        <Merch />
        <hr className="container mx-auto border-2 border-purple-800/50" />
        <Inquiries />
        <hr className="container mx-auto border-2 border-purple-800/50" />
      </main>
    </Transition>
  );
}
