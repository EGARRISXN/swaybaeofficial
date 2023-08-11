import Link from "next/link";

export default function MediaKitContainer() {
  return (
    <div className="bg-base-200 border-base-content border-4 rounded-xl shadow-xl shadow-purple-800/50 p-4 mx-auto">
      <div className="card-body rounded-xl bg-base-200">
        <h2 className="card-title">We will have this page up very soon!!</h2>
        <p>In the mean time, check out the rest of the site!</p>
        <div className="card-actions justify-end">
          <Link href="/about">
            <button className="mt-6 w-40 btn btn-secondary border-2 border-base-content font-bold">
              Let&#39;s Go!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
