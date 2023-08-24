"use client";

import { Transition } from "../../components/Transition";
import TeespringEmbed1 from "../../components/(merch)/TeespringEmbed1";
import TeespringEmbed2 from "../../components/(merch)/TeespringEmbed2";
import TeespringEmbed3 from "../../components/(merch)/TeespringEmbed3";

export default function Merch() {
  return (
    <Transition>
      <main>
        <div className="container mx-auto flex flex-col items-center justify-center py-20 ">
          <div className=" hidden lg:block rounded-3xl shadow-2xl shadow-purple-800/5">
            <TeespringEmbed1 />
          </div>
          <div className="hidden md:block lg:hidden rounded-3xl shadow-2xl shadow-purple-800/5">
            <TeespringEmbed2 />
          </div>
          <div className="block md:hidden rounded-3xl shadow-2xl shadow-purple-800/5">
            <TeespringEmbed3 />
          </div>
        </div>
      </main>
    </Transition>
  );
}
