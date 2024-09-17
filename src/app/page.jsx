import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import AboutProject from "./components/AboutProject";
import Footer from "./components/Footer/footer";
import Records from "./components/Records";
import Sec from "./components/Sec";

export default function Home() {
  return (
    <main>
      <div className="mb-10">
        <Navbar />
      </div>
      <div className="section my-10">
        <Section />
      </div>
      <div className="flex justify-center items-center">
        <Records />
      </div>
      <div className="section my-10">
        <Sec />
      </div>
      <div className="flex justify-center items-center">
        <AboutProject />
      </div>
      <Footer />
    </main>
  );
}
