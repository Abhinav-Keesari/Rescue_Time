import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Login } from "./components/Pages/Login";
import { Report } from "./components/Pages/Report";
import { AboutUs } from "./components/Pages/About";
import { Collaborate } from "./components/Pages/Collaborate";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/report" element={<Report />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/collaborate" element={<Collaborate />} />
          </Routes>

        </div>
      </Router>
  </>
  );
}

export default App;
