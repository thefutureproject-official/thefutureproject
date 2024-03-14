"use client"
import Footer from "@/components/Footer";
import HeadBar from "@/components/HeadBar";
import MainContent from "@/components/MainContent";
import NavAnimate from "@/components/NavAnimate";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  const session = useSession();

  // console.log("session : ",session);
  useEffect(() => {
    if (session.data != null) {
      console.log("user is logged in ? yes" , session.data.user);
    } else {
      console.log("user is logged in ? no");
    }
  })
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
