import Animation from "../components/Animation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Animation>
      <main>
        <Navbar />
        <div className="flex h-screen w-full justify-center items-center p-0"></div>
        <Footer />
      </main>
    </Animation>
  );
}

// import Animation from "../components/Animation";
// import About from "./about/page";
// import Socials from "./socials/page";
// import Inquiries from "./inquiries/page";
// import Merch from "./merch/page";
// import Subathon from "./subathon/page";
// import Image from "next/image";
// import LogoWhite from "../public/images/logowhite.png";

// export default function Home() {
//   return (
//     <Animation>
//       <main className="w-full">
//         <div className="container mx-auto flex justify-center items-center ">
//           <Image src={LogoWhite} width={500} height={500} alt="hero" />
//         </div>
//         <hr className="w-full border-4 border-primary" />
//         <div className="x">
//           <About />
//         </div>
//         <hr className="w-full border-4 border-primary" />
//         <div className="x">
//           <Socials />
//         </div>
//         <hr className="w-full border-4 border-primary" />
//         <div className="x">
//           <Merch />
//         </div>
//         <hr className="w-full border-4 border-primary" />
//         <div className="x">
//           <Inquiries />
//         </div>
//         <hr className="w-full border-4 border-primary" />
//         <div className="x">
//           <Subathon />
//         </div>
//       </main>
//     </Animation>
//   );
// }
