"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className="flex text-center items-center">
      <div className="container pb-40">
        <hr />
        <h1>500 Page</h1>
        <p className="text-primary">This is embarrasing...</p>
        <button
          onClick={reset}
          className="btn-sm rounded-xl btn-secondary text-base-content mb-4 mt-2"
        >
          Retry
        </button>
        <hr />
      </div>
    </main>
  );
}
