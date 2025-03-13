// import React from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";

// function App() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <About />
//     </>
//   );
// }

// export default App;

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Events from "./components/Events";
import Team from "./components/Team";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Events />
      <Team />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
