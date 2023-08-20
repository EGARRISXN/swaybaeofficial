import Link from "next/link";

export default function MediaKitContainer() {
  return (
    <div className="card-body rounded-2xl bg-base-200  border-base-content border-b-4 border-r-4 mx-auto shadow-xl shadow-purple-800/50">
      <hr className="hr-lines border-secondary my-2" />
      <h2 className="card-title font-bold text-2xl">Page will be up soon!</h2>
      <p>In the meantime, go checkout the rest of the site!</p>
      <hr className="hr-lines border-secondary my-2" />
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
