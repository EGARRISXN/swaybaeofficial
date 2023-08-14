import Animation from "../../components/Animation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import MediaKitContainer from "../../components/(mediakit)/MediaKitContainer";

export default function MediaKit() {
  return (
    <Animation>
      <Navbar />
      <main>
        {/* <div className="container flex flex-col items-center justify-center  pb-16 lg:pb-0 pt-16">
          <div>
            <h1 className="text-6xl animate-pulse text-center pb-6">
              Under Construction!
            </h1>
            <MediaKitContainer />
          </div>
        </div> */}
      </main>
      <Footer />
    </Animation>
  );
}
