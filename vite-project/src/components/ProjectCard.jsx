import { motion } from "framer-motion";

const ProjectCard = ({ project, onOpen }) => {
  if (!project) return null;

  return (
    <motion.div
      className="bg-[#F6F1EB] dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 p-6 h-80 flex flex-col justify-between"
      whileHover={{ scale: 1.03 }}
      onClick={onOpen}
    >
      <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
        Project {project.id}
      </h4>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center flex-1 flex items-center justify-center">
        {project.title}
      </h3>

      {/* Optional bottom section for spacing */}
      <div className="text-sm text-gray-500 dark:text-gray-400 text-center"></div>
    </motion.div>
  );
};

export default ProjectCard;
