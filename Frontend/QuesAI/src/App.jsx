import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Podcast from "./pages/Podcast";

function App() {
  return (
    <Router>
      <div className="max-w-[1600px] mx-auto min-h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/podcast/:id" element={<Podcast />} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;
