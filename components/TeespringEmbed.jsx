export default function TeespringEmbed() {
  return (
    <div className="bg-base-content p-2 rounded-xl shadow-xl shadow-purple-500/50 mx-auto">
      <iframe
        className="bg-white rounded-lg"
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
