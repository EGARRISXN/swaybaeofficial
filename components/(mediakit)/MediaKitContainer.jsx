import Link from "next/link";
import UniversalButton from "../../utils/UniversalButton";

export default function MediaKitContainer() {
  return (
    <div className="card-body rounded-xl bg-base-200 border-base-content border-[8px] mx-auto shadow-xl shadow-purple-800/50">
      <hr className="hr-lines border-secondary my-2" />
      <h2 className="card-title font-bold text-2xl">Page will be up soon!</h2>
      <p>In the meantime, go checkout the rest of the site!</p>
      <hr className="hr-lines border-secondary my-2" />
      <div className="card-actions justify-end">
        <Link href="/about">
          <UniversalButton>Let&#39;s Go!</UniversalButton>
        </Link>
      </div>
    </div>
  );
}
