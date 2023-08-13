export default function NeonButton() {
  return (
    <div className="relative flex group w-fit text-white">
      <div className="bg-cyan-500 group-hover:bg-cyan-300 rounded-lg px-4 py-2 w-fit mt-2">
        <a href="#">Biru</a>
      </div>
      <div className="bg-cyan-500 group-hover:bg-cyan-300 absolute -z-10 rounded-lg px-4 py-2 w-fit mt-2 blur-sm animate-pulse">
        <a href="#">Cyan</a>
      </div>
    </div>
  );
}
