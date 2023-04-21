import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import AllHotels from "./pages/hotel/AllHotels";
import City from "./components/featured/City";
import City1 from "./components/featured/City1";
import City2 from "./components/featured/City2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all-hotels" element={<AllHotels />} />
        <Route path="/bCity" element={<City />} />
        <Route path="/biCity" element={<City1 />} />
        <Route path="/rCity" element={<City2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
