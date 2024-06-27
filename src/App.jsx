import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Navigate replace to="/" />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route element={<AppLayout />}>
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
