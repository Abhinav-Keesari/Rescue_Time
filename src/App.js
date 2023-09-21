import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Training } from "./components/Pages/Training";
import { Report } from "./components/Pages/Report";
import { Collaborate } from "./components/Pages/Collaborate";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training" element={<Training />} />
            <Route path="/report" element={<Report />} />
            <Route path="/collaborate" element={<Collaborate />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
