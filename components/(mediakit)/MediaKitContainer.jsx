import Link from "next/link";

export default function MediaKitContainer() {
  return (
    <div className="card-body rounded-2xl bg-base-200 border-base-content border-[6px] mx-auto shadow-xl shadow-purple-800/50">
      <hr className="hr-lines border-secondary my-2" />
      <h2 className="card-title font-bold text-2xl">Page will be up soon!</h2>
      <p>In the meantime, go checkout the rest of the site!</p>
      <hr className="hr-lines border-secondary my-2" />
      <div className="card-actions justify-end">
        <Link href="/about">
          <button className="uppercase text-sm p-3 my-4 w-36 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white">
            Let&#39;s Go!
          </button>
        </Link>
      </div>
    </div>
  );
}
