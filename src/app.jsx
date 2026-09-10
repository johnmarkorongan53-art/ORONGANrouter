import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import Events from "./Events.jsx";
import EventDetail from "./EventDetail.jsx";
import Register from "./Register.jsx";
import Confirmation from "./Confirmation.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container text-center">
          <p className="mb-1 fw-semibold">EventHub</p>
          <small>Discover. Connect. Participate.</small>
        </div>
      </footer>
    </>
  );
}

export default App;