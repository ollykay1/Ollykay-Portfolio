import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectModal from "./components/ProjectModal.jsx";
import SectionHeader from "./components/SectionHeader.jsx";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Network Vulnerability Scanner",
      description:
        "Developed a custom tool to detect potential security weaknesses in network configurations. Focused on ethical hacking and penetration testing principles.",
    },
    {
      id: 2,
      title: "Secure Portfolio Web App",
      description:
        "Built a responsive portfolio web application with secure authentication, emphasizing client-side encryption and user data protection.",
    },
    {
      id: 3,
      title: "Password Strength Tester",
      description:
        "Created a tool to analyze and test strong vs. weak passwords, helping users understand how to create secure credentials.",
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-[#FDF7EE] dark:bg-gray-900 text-black dark:text-white font-sans">
      <Navbar />

      <main className="p-6">
        <SectionHeader title="My Projects" subtitle="Professional Projects as a Cybersecurity Student" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
