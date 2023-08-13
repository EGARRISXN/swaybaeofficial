export default function Neon2() {
  const neonTextStyles = {
    color: "#f09", // Text color
    textShadow:
      "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #f09, 0 0 80px #f09, 0 0 90px #f09, 0 0 100px #f09, 0 0 150px #f09",
    textAlign: "center",
    display: "inline-block",
    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background color
  };
  return (
    <div
      className="neon2-wrapper animate-pulse shadow-purple-800/50 py-16 text-center mt-[-240px] lg:mt-[-120px]"
      style={neonTextStyles}
    >
      <h3 className="neon2 text-6xl animate-pulse">Welcome!</h3>
    </div>
  );
}
