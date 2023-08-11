import MediaKitContainer from "../../components/MediaKitContainer";

export default function MediaKit() {
  return (
    <main>
      <div className="container flex flex-col items-center justify-center px-6 py-10">
        <h1 className="text-6xl mb-6">Media Kit</h1>
        <MediaKitContainer />
      </div>
    </main>
  );
}
