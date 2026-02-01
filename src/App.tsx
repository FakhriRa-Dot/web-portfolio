import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about/about";
import HomePage from "./pages/home/home";
import ProjectPage from "./pages/project/project";
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Route>
    </Routes>
  );
}

export default App;
