import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MenuDisplay from "./pages/MenuDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/menu/:id" element={<MenuDisplay />} />
        </Routes>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
