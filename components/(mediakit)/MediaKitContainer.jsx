import Link from "next/link";

export default function MediaKitContainer() {
  return (
    <div className="card-body rounded-xl bg-base-200  border-base-content border-4 mx-auto shadow-2xl shadow-purple-800/50">
      <h2 className="card-title text-2xl">Page will be up soon!</h2>
      <p>In the mean time, go check out the rest of the site!</p>
      <div className="card-actions justify-end">
        <Link href="/about">
          <button className="btn btn-md btn-secondary w-40 mt-6">
            Let&#39;s Go!
          </button>
        </Link>
      </div>
    </div>
  );
}
