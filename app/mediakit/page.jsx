"use client";
import Framer from "../../components/Framer";
import CardExample from "../../components/CardExample";

export default function MediaKit() {
  return (
    <Framer>
      <div className="container flex flex-col items-center justify-center  pb-16 lg:pb-0 pt-16">
        <h1 className="text-6xl pb-6">Filler!</h1>
        <CardExample />
      </div>
    </Framer>
  );
}
