// src/components/TechnologyCard.jsx

import React from 'react';
import { motion } from 'framer-motion';

const TechnologyCard = ({ name, icon, color, delay }) => {
  return (
    <motion.div
      className="flex flex-col items-center bg-gray-900/50 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer border border-gray-800 relative group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <motion.span
        className={`${color} text-6xl`} // Increased size to text-6xl
        animate={{
          y: [0, -10, 0], // Floating animation
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      >
        {icon}
      </motion.span>
      {/* Tooltip */}
      <div className="absolute bottom-0 mb-10 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
        {name}
      </div>
    </motion.div>
  );
};

export default TechnologyCard;
