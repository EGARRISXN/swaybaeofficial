import MediaKitContainer from "../../components/(mediakit)/MediaKitContainer";

export default function MediaKit() {
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
      <h1 className="text-6xl animate-pulse pb-6">Under Construction!</h1>
      <MediaKitContainer />
    </div>
  );
}

// import MediaKitContainer from "../../components/(mediakit)/MediaKitContainer";

// export default function MediaKit() {
//   return (

//       <div className="container flex flex-col items-center justify-centerp pb-16 lg:pb-0 pt-16">
//         <h1 className="text-6xl animate-pulse pb-6">Under Construction!</h1>
//         <MediaKitContainer />

//       </div>
//   );
// }
