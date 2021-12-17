import { motion } from 'framer-motion';
import React from 'react';

interface BulletProps {
  content: string;
}

const Bullet = ({ content }: BulletProps) => {
  const words = content.split(/(\s+)/); // Splits every bullet content on words into array
  console.log(words);

  return (
    <div className='flex items-center mt-4 mb-4 relative overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'backInOut' }}
        className='p-1 bg-gradient-to-l from-primary to-secondary mr-8 rounded-sm'
      >
        <div className='w-6 h-6 bg-background rounded-sm'></div>
      </motion.div>
      {words.map((word, i) => (
        <motion.span
          initial={{ y: 50, scale: 1.1 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: i * 0.02, ease: 'easeOut' }}
          key={i}
          className='text-md text-textPrimary'
        >
          {word}
        </motion.span>
      ))}
      <motion.div
        initial={{ height: '100%' }}
        animate={{ height: '0%' }}
        transition={{ duration: 1.5, ease: 'linear' }}
        className='absolute right-0 left-30 bottom-0 bg-black'
      ></motion.div>
    </div>
  );
};

export default Bullet;
