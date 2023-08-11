export default function TeespringEmbed() {
  return (
    <div className="text-center border-4 border-base-content bg-white pt-4 rounded-xl shadow-xl shadow-purple-800/50">
      <h1 className="text-3xl mb-2 mt-2">Sway&apos;s Swag!</h1>
      <iframe
        className="p-1 bg-white rounded-lg"
        src="https://embed.creator-spring.com/widget?slug=sway-baes-merch-store&per=6&bg=ffffff&txtcolor=000000&currency=&page="
        title="My widget Merch store powered by Spring"
        allowFullScreen={true}
        loading="lazy"
        style={{
          width: 320,
          height: 480,
        }}
      ></iframe>
    </div>
  );
}
