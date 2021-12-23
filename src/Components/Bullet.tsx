import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

interface BulletProps {
  content: string;
}

const Bullet = ({ content }: BulletProps) => {
  return (
    <div className='flex items-center mt-4 mb-4 relative overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, x: '-100%', scale: 0 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'backInOut' }}
        className='p-1 bg-gradient-to-l from-primary to-secondary mr-8 rounded-sm'
      >
        <div className='w-6 h-6 bg-background rounded-sm'></div>
      </motion.div>
      <AnimatedText
        className='text-textPrimary bodySans text-sm'
        animation='opacity-right'
        splitOn='words'
      >
        {content}
      </AnimatedText>
    </div>
  );
};

export default Bullet;
