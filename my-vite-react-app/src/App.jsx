import "./App.css";
//import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Footer from "./components/Footer";
import Error from "./components/Error";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import NavBar from "./components/Navbar.jsx";
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
