import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Theme from "./snippets/Theme";
import Menu from "./snippets/Menu";
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CustomCursor from './snippets/CustomCursor';

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Menu />
      <Theme />
    </BrowserRouter>
  );
}

export default App;
