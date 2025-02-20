
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<About />} />
          <Route path="/about" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
