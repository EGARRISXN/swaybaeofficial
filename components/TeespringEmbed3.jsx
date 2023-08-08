export default function TeespringEmbed() {
  return (
    <div className="bg-base-200 rounded-xl shadow-xl shadow-purple-500/50 p-4 mx-auto">
      <iframe
        className="rounded-sm"
        src="https://embed.creator-spring.com/widget?slug=sway-baes-merch-store&per=6&bg=ffffff&txtcolor=000000&currency=&page="
        title="My widget Merch store powered by Spring"
        allowFullScreen="true"
        loading="lazy"
        style={{
          width: 320,
          height: 420,
        }}
      ></iframe>
    </div>
  );
}
