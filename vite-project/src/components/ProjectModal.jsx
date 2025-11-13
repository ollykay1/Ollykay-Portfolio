import React from "react";
import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="bg-[#FFF9F0] dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {project.title}
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
