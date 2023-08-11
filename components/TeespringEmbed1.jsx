export default function TeespringEmbed1() {
  return (
    <div className="text-center border-base-content border-4 bg-white py-4 rounded-xl shadow-xl shadow-purple-800/50">
      <h1 className="text-7xl mb-6 mt-2 text-primary">Sway&apos;s Swag!</h1>
      <iframe
        className=" rounded-lg"
        src="https://embed.creator-spring.com/widget?slug=sway-baes-merch-store&per=6&bg=ffffff&txtcolor=000000&currency=&page="
        title="My widget Merch store powered by Spring"
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
