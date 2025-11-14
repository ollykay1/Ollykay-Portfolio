import { motion } from "framer-motion";

const ProjectCard = ({ project, onOpen }) => {
  if (!project) return null;

  return (
    <motion.div
      className="project-card cursor-pointer rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-start p-6 h-72 sm:h-80 md:h-80"
      whileHover={{ scale: 1.02 }}
      onClick={onOpen}
    >
      <div className="flex flex-col h-full justify-start">
        {/* Project Number */}
        <h4 className="project-number mb-2">
          Project {project.id}
        </h4>

        {/* Project Title */}
        <h3 className="project-title">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
