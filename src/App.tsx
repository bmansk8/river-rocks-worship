import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Chords from "./pages/chords";
import Testimonies from "./pages/testimonies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chords" element={<Chords />}></Route>
        <Route path="/testimonies" element={<Testimonies />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
