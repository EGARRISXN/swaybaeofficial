export default function MediaKitContainer() {
  return (
    <div className=" bg-base-200 border-base-content border-4 rounded-xl shadow-xl shadow-purple-800/50 p-4 mx-auto">
      <div className="card-body rounded-xl bg-base-200">
        <h2 className="card-title">Media Kit!</h2>
        <p>Here is the information for your media kit!</p>
        <div className="card-actions justify-end">
          <button className="mt-4 w-40 btn btn-secondary border-2 border-base-content font-bold">
            Interested?
          </button>
        </div>
      </div>
    </div>
  );
}
