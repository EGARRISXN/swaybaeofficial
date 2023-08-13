export default function NeonCard() {
  return (
    <div className="relative flex">
      <div className="rounded-lg border border-white p-3 text-white">
        <h1 className="text-3xl">This Is Tittle</h1>
        <hr className="my-2" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          sit tempore cupiditate deserunt dolore perspiciatis officiis
          praesentium error? Aspernatur, earum?
        </p>
      </div>
      <div className="absolute -z-10 h-full w-full animate-pulse border-2 border-pink-500 blur-sm"></div>
    </div>
  );
}
