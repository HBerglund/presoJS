import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DirectionContext } from '../Context/DirectionContext';

type Props = {
  children: React.ReactNode;
};

const SlideParent: React.FC<Props> = ({ children }) => {
  const directionContext = useContext(DirectionContext);

  return (
    <motion.div
      initial={{
        x: directionContext.direction === 'forward' ? '100%' : '-100%',
      }}
      animate={{ x: '0%' }}
      exit={{
        x: directionContext.direction === 'forward' ? '-100%' : '100%',
      }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`w-full flex flex-col items-start h-screen p-20 bg-background`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default SlideParent;
