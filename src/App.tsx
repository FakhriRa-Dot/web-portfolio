import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutPage from "./pages/about/about";
import HomePage from "./pages/home/home";
import ProjectPage from "./pages/project/project";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
