import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard"; 
import Auth from "./auth/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Auth />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
