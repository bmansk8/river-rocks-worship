import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Chords from "./pages/chords/chords";
import Music from "./pages/music/music";
import Navbar from "./global-components/Navbar";
import Footer from "./global-components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/chords" element={<Chords />} />
          <Route path="/music" element={<Music />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
