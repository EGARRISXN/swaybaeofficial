export default function NeonContainer() {
  return (
    <div className="relative flex h-auto w-full">
      <div className="h-fit w-full rounded-lg border border-white p-5 text-white">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem deserunt corrupti deleniti voluptates non perferendis
          sunt dolor earum numquam ipsa? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores repellendus non voluptatum assumenda qui?
        </p>
      </div>
      <h1 className="absolute -top-5 left-3 bg-[#12102a] p-2 text-white">
        Title Container
      </h1>
      <div className="absolute -z-10 h-full w-full animate-pulse rounded-lg border-4 border-pink-600 p-3 blur-sm"></div>
    </div>
  );
}
