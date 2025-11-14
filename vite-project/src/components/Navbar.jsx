import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full px-5 sm:px-8 py-4 bg-[#FAF4E8] dark:bg-[#0d1117] shadow-md fixed top-0 left-0 z-50 flex justify-between items-center transition-all duration-300">
      <motion.h1
        className="portfolio-shine text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        OLLYKAY&apos;S PORTFOLIO
      </motion.h1>

      <div className="hidden md:flex items-center gap-5">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            className="nav-link font-medium"
            whileHover={{ scale: 1.05 }}
          >
            {link.name}
          </motion.a>
        ))}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="absolute top-16 right-5 bg-[#f2e7cf] dark:bg-[#161b22] rounded-xl shadow-lg p-4 flex flex-col gap-3 md:hidden w-52"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link font-medium" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 flex items-center justify-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
