export default function TeespringEmbed1() {
  return (
    <div className="text-center text-base-content border-base-content bg-base-200 border-[6px] rounded-2xl shadow-xl shadow-purple-800/50">
      <h1 className="text-5xl mb-6 mt-2">Offical Swaybae Merchandise</h1>
      <iframe
        className="rounded-b-lg shadow-xl shadow-purple-800/50"
        src="https://embed.creator-spring.com/widget?slug=sway-baes-merch-store&per=6&bg=ffffff&txtcolor=000000&currency=&page="
        title="The Official Merch Store for Swaybae!"
        allowFullScreen={true}
        loading="lazy"
        style={{
          width: 1024,
          height: 740,
        }}
      ></iframe>
    </div>
  );
}
