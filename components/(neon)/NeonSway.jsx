export default function NeonSway() {
  const neonTextStyles = {
    color: "#f09", // Text color
    textShadow:
      "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #f09, 0 0 80px #f09, 0 0 90px #f09, 0 0 100px #f09, 0 0 150px #f09",
    padding: "20px",
    textAlign: "center",
    display: "inline-block",
    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background color
  };

  return (
    <div className="container">
      <h3
        className="neonText text-center font-normal text-6xl animate-pulse "
        style={neonTextStyles}
      >
        Sway <br /> Bae
      </h3>
    </div>
  );
}

// export default function NeonSway() {
//   const neonTextStyles = {
//     animation: "pulse 0.99s ease-in-out infinite alternate",
//     textShadow:
//       "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #f09, 0 0 80px #f09, 0 0 90px #f09, 0 0 100px #f09, 0 0 150px #f09",
//   };
//   return (
//     <div className="container">
//       <h3
//         className="neonText text-center font-normal text-6xl animate-pulse"
//         style={neonTextStyles}
//       >
//         Sway <br /> Bae
//       </h3>
//     </div>
//   );
// }
