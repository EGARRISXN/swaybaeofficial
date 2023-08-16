export default function TeespringEmbed1() {
  return (
    <div className="text-center text-white border-base-content bg-black border-8 pt-2 mt-4 rounded-xl shadow-2xl shadow-purple-800/50">
      <h1 className="text-5xl mb-6 mt-2">Offical Swaybae Merchandise</h1>
      <iframe
        className="rounded-sm"
        src="https://embed.creator-spring.com/widget?slug=sway-baes-merch-store&per=6&bg=ffffff&txtcolor=000000&currency=&page="
        title="The Official Merch Store for Swaybae!"
        allowFullScreen={true}
        loading="lazy"
        style={{
          width: 960,
          height: 740,
        }}
      ></iframe>
    </div>
  );
}
