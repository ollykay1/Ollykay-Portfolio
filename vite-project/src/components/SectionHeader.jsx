import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ title }) => {
  return (
    <motion.div
      className="text-center mb-10"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="h-1 w-24 mx-auto mt-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default SectionHeader;
