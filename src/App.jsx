
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./pages/ContactPage";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
    <Navbar />
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    <main>
      <Routes>
        <Route
        path="/"
        element={<BlogPostsPage />}
        />
        <Route
        path="/posts/:id"
        element={<IndividualPostPage />}
        />

        <Route
        path="/contact"
        element={<ContactPage />}
        />

        <Route
        path="*"
        element={<h1>Page Not Found</h1>}
        />
        </Routes>
      </main>
      <Footer />
    </div>
    );
}
export default App;