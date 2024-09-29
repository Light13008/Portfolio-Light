// Import React and other necessary dependencies
import React from 'react';
import { motion } from 'framer-motion';

// Stair animation settings
const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

// Function to calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

// Stairs component
const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each representing a step of the stairs.
      Each div will have the same animation defined by the stairAnimation object.
      The delay for each div is calculated dynamically based on its reversed index,
      creating a stagger effect with decreasing delay for each subsequent step.
      */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: 0.1 * reverseIndex(index),
          }} 
          className=' h-full w-full bg-white relative '
        />
      ))}
    </>
  );
};

export default Stairs;
