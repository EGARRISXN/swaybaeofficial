import AboutMeBio from "../../components/(about)/AboutMeBio";

export default function About() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AboutMeBio />
    </div>
  );
}

// import Neon2 from "../../components/(about)/Neon2";
// import AboutText from "../../components/(about)/AboutText";
// import AboutPhoto from "../../components/(about)/AboutPhoto";

// export default function About() {
//   return (
//     <main>
//       <div className="container border-2 border-yellow-300 justify-center flex">
//         {/* <Neon /> */}
//         <div className="flex flex-col border-2 border-yellow-300">
//           <Neon2 />
//           <AboutText />
//         </div>
//         <div className="flex flex-col border-2 border-yellow-300">
//           <AboutPhoto />
//         </div>
//       </div>
//     </main>
//   );
// }
