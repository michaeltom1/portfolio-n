"use client"
// import Navbar from "./components/navbar";
import Footer from "./components/footer";
import * as Sections from "./components/sections";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/navbar"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Sections.Hero />
      <Sections.About />
      <Sections.Projects />
      <Sections.Contact />
      <Footer />
    </>
  );
}
