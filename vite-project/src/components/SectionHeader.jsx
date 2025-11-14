import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ title }) => {
  return (
    <div className="text-center mt-32 mb-10">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeader;
