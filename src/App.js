import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Courses />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
