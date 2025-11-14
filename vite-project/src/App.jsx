import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectModal from "./components/ProjectModal.jsx";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Network Vulnerability Scanner",
      description:
        "Developed a custom tool to detect potential security weaknesses in network configurations.",
    },
    {
      id: 2,
      title: "Secure Portfolio Web App",
      description:
        "Built a responsive portfolio web application with secure authentication.",
    },
    {
      id: 3,
      title: "Password Strength Tester",
      description:
        "Created a tool to analyze and test strong vs. weak passwords.",
      link: "https://password-strength-checker-ruby.vercel.app",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF4E8] dark:bg-gray-900 text-black dark:text-white font-sans transition-colors duration-300">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 md:pt-36">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4b3e2b] dark:text-white text-center mb-10 sm:mb-12">
          My Cybersecurity Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
