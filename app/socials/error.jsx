"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex text-center items-center">
      <div className={`container ${(error, reset)}`}>
        <h3>There is an error.</h3>
        <p>{error.message}</p>
        <button
          onClick={reset}
          className="btn-sm rounded-3xl btn-secondary text-base-content mb-4 mt-2"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
