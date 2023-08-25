import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex text-center items-center">
      <div className="container pb-40">
        <hr />
        <h1>404 Page</h1>
        <p className="text-primary">This is embarrasing...</p>
        <Link href="/">
          <button className="btn-sm rounded-3xl btn-secondary text-base-content mb-4">
            Go Home
          </button>
        </Link>
        <hr />
      </div>
    </main>
  );
}
