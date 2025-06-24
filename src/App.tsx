/*******************************************************************************

  Sanity Template

  an unopinionated starter kit
  for designers like me who want to use React + Vite + Tailwind + shadcn-ui in dark mode
  but don't want to have to debug five fucking files just to figure out
  what the hell is colouring that button.

  Author    Joshua Vargas (https://github.com/vargaseous)

  _____________________________________________________________________________

  App.tsx
  The root layout for your app.
  It sets up the overall page structure, including the navbar and route logic.

*******************************************************************************/

// Importing App.tsx-specific styles 
import "./App.css";

// Importing pages
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

// Importing the navbar
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer"

// Page layout
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
