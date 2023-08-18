"use client";
export default function Loading() {
  return (
    <main>
      <div className="container mx-auto p-16">
        <h1 className="text-3xl text-center text-gray-800 opacity-80 p-4">
          Loading...
        </h1>
        <div className="loader"></div>
      </div>
    </main>
  );
}
