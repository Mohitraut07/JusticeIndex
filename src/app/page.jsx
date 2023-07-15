import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import AboutProject from "./components/AboutProject";
import Footer from "./components/Footer/footer";
import { ToastContainer, toast } from "react-toastify";
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
      <Records />
      <div className="section my-10">
        <Sec />
      </div>
      <AboutProject />
      <Footer />
    </main>
  )
}
