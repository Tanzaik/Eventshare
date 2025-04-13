import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthSuccess from "./pages/AuthSuccess";
import EventFeed from "./pages/EventFeed";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/success" element={<AuthSuccess />} />
        <Route path="/events" element={<EventFeed />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
