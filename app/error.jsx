"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <div className={`container ${error}`}>
        <div className="container flex justify-center">
          <h2>Something went wrong!</h2>
          <button
            onClick={() => reset()}
            className="btn-sml rounded-3xl btn-secondary text-base-content mb-4"
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}
