import Footer from "@/components/Footer";
import HeadBar from "@/components/HeadBar";
import MainContent from "@/components/MainContent";
import NavAnimate from "@/components/NavAnimate";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="h-full w-full">
        <div className="flex flex-col gap-11 h-[850px]">
          {/* <div><NavAnimate /></div> */}
          <div>
            <Navbar />
          </div>
          <div>
            <HeadBar />
          </div>
          <div>
            <MainContent />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
