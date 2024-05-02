import "./App.css";
//import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
//import NavBar from "./components/Navbar";
import Proba from "./components/Proba";
import Footer from "./components/Footer";
import Error from "./components/Error";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
