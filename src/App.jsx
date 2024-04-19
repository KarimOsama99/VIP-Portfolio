import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WOW from "wowjs";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const LazyPortfolio = React.lazy(() => import("./components/Portfolio"));

function App() {
useEffect(() => {
  new WOW.WOW({
    live: false,
  }).init();
}, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Portfolio" element=
          {<React.Suspense fallback="Loading...">
            <LazyPortfolio />
          </React.Suspense>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
