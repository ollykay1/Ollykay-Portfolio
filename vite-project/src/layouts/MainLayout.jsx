import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Footer from "../components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );
  const location = useLocation();

  useScrollToTop(location);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            Cyberflex
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Contact
            </Link>

            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileTap={{ rotate: 180, scale: 0.9 }}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </motion.button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;