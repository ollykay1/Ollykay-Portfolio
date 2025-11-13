import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import "./Navbar.css"; // our professional CSS animation

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false);

  // Apply dark mode to <html>
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
    <nav className="w-full p-4 bg-gray-50 dark:bg-gray-800 flex justify-between items-center shadow-md">
      {/* Logo / Header */}
      <motion.h1
        className="navbar-logo navbar-fade"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        OLLYKAY-PORTFOLIO
      </motion.h1>

      {/* Desktop Nav + Toggle */}
      <div className="hidden md:flex items-center gap-3">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            className="nav-link text-gray-900 dark:text-gray-100"
            whileHover={{ scale: 1.05 }}
          >
            {link.name}
          </motion.a>
        ))}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="dark-toggle flex items-center"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="mobile-menu md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-gray-900 dark:text-gray-100"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="dark-toggle flex items-center mt-2"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
