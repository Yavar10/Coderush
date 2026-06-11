import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Timeline6 from "./components/Timeline6";
import Sponsors from "./components/Sponsers";
import Cursor from "./components/Cursor";

const App = () => {
  return (
  <>
  <Cursor/>
  <Navbar/>
   <Hero/>
   <Timeline6/>
   <Sponsors/>
   <Footer/>
  </>

  );
};

export default App;