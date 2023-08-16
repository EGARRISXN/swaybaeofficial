export default function TeespringEmbed() {
  return (
    <div className="text-center  text-white border-base-content bg-black border-8 pt-2 rounded-xl shadow-2xl shadow-purple-800/50">
      <h1 className="text-2xl mb-7 mt-4">Offical Swaybae Merchandise</h1>
      <iframe
        className="rounded-sm"
        src="https://embed.creator-spring.com/widget?slug=sway-baes-merch-store&per=6&bg=ffffff&txtcolor=000000&currency=&page="
        title="The Official Merch Store for Swaybae!"
        allowFullScreen={true}
        loading="lazy"
        style={{
          width: 320,
          height: 450,
        }}
      ></iframe>
    </div>
  );
}
