import React from 'react';
import { motion } from 'framer-motion';

const CubeFace = ({ size, color, edgeColor, transform }) => (
  <motion.div 
    animate={{
      background: [
        `linear-gradient(135deg, 
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.02) 20%,
          rgba(255, 255, 255, 0.05) 40%,
          rgba(255, 255, 255, 0.08) 45%,
          rgba(255, 255, 255, 0.05) 50%,
          rgba(255, 255, 255, 0.02) 80%,
          rgba(255, 255, 255, 0) 100%
        )`,
        `linear-gradient(135deg, 
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.01) 20%,
          rgba(255, 255, 255, 0.03) 40%,
          rgba(255, 255, 255, 0.05) 45%,
          rgba(255, 255, 255, 0.03) 50%,
          rgba(255, 255, 255, 0.01) 80%,
          rgba(255, 255, 255, 0) 100%
        )`,
        `linear-gradient(135deg, 
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.02) 20%,
          rgba(255, 255, 255, 0.05) 40%,
          rgba(255, 255, 255, 0.08) 45%,
          rgba(255, 255, 255, 0.05) 50%,
          rgba(255, 255, 255, 0.02) 80%,
          rgba(255, 255, 255, 0) 100%
        )`
      ]
    }}
    transition={{
      background: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
    style={{
      position: 'absolute',
      width: size,
      height: size,
      transform,
      border: `2px solid ${edgeColor}`,
      backgroundColor: color,
      backdropFilter: 'blur(5px)',
    }}
    className="overflow-hidden"
  />
);

const TechnologyCard = ({ name, icon, color, delay = 0 }) => {
  const boxSize = 80;
  const halfSize = boxSize / 2;
  
  const getColorValues = (colorClass) => {
    const colorMap = {
      'text-[#61DAFB]': { edge: 'rgba(97, 218, 251, 0.5)', face: 'rgba(97, 218, 251, 0.03)' },
      'text-white': { edge: 'rgba(255, 255, 255, 0.5)', face: 'rgba(255, 255, 255, 0.03)' },
      'text-[#339933]': { edge: 'rgba(51, 153, 51, 0.5)', face: 'rgba(51, 153, 51, 0.03)' },
      'text-[#47A248]': { edge: 'rgba(71, 162, 72, 0.5)', face: 'rgba(71, 162, 72, 0.03)' },
      'text-[#4479A1]': { edge: 'rgba(68, 121, 161, 0.5)', face: 'rgba(68, 121, 161, 0.03)' },
      'text-[#3776AB]': { edge: 'rgba(55, 118, 171, 0.5)', face: 'rgba(55, 118, 171, 0.03)' },
      'text-[#FF6F00]': { edge: 'rgba(255, 111, 0, 0.5)', face: 'rgba(255, 111, 0, 0.03)' },
      'text-[#2496ED]': { edge: 'rgba(36, 150, 237, 0.5)', face: 'rgba(36, 150, 237, 0.03)' }
    };
    return colorMap[color] || { edge: 'rgba(255, 255, 255, 0.5)', face: 'rgba(255, 255, 255, 0.03)' };
  };

  const { edge: edgeColor, face: faceColor } = getColorValues(color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="relative"
      style={{ width: boxSize, height: boxSize }}
    >
      {/* Static content */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center z-10">
        <div className={`text-2xl mb-2 ${color}`}>{icon}</div>
        <p className="text-xs text-center text-gray-300 font-medium">{name}</p>
      </div>

      {/* Rotating cube */}
      <motion.div
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, -15, 0]
        }}
        transition={{
          rotateY: {
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          },
          rotateX: {
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }
        }}
        className="w-full h-full absolute"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
      >
        <div className="absolute w-full h-full" style={{ transformStyle: "preserve-3d" }}>
          <CubeFace
            size={boxSize}
            color={faceColor}
            edgeColor={edgeColor}
            transform={`translateZ(${halfSize}px)`}
          />
          <CubeFace
            size={boxSize}
            color={faceColor}
            edgeColor={edgeColor}
            transform={`translateZ(${-halfSize}px)`}
          />
          <CubeFace
            size={boxSize}
            color={faceColor}
            edgeColor={edgeColor}
            transform={`rotateY(90deg) translateZ(${halfSize}px)`}
          />
          <CubeFace
            size={boxSize}
            color={faceColor}
            edgeColor={edgeColor}
            transform={`rotateY(-90deg) translateZ(${halfSize}px)`}
          />
          <CubeFace
            size={boxSize}
            color={faceColor}
            edgeColor={edgeColor}
            transform={`rotateX(90deg) translateZ(${halfSize}px)`}
          />
          <CubeFace
            size={boxSize}
            color={faceColor}
            edgeColor={edgeColor}
            transform={`rotateX(-90deg) translateZ(${halfSize}px)`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechnologyCard;