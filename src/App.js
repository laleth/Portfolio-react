import './App.css';
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Experience from "./Pages/Experience";
import About from "./Pages/About";

function App() {
  useEffect(() => {
    const pathname = window.location.pathname;

    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "This is the home page";
        break;
      case "/experience":
        title = "Experience";
        metaDescription = "Experience page description";
        break;
      case "/about":
        title = "About";
        metaDescription = "About page description";
        break;
      default:
        title = "Not Found";
        metaDescription = "Page not found";
        break;
    }

    document.title = title;

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
