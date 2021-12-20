import { motion } from 'framer-motion';
import { useContext } from 'react';
import { PresentationContext } from '../Context/PresentationContext';
import BlurBlob from './BlurBlob';

type Props = {
  children: React.ReactNode;
};

const SlideParent: React.FC<Props> = ({ children }) => {
  const presentationContext = useContext(PresentationContext);

  return (
    <motion.div
      className={'relative z-10'}
      initial={{
        x: presentationContext.direction === 'forward' ? '100%' : '-100%',
      }}
      animate={{ x: '0%' }}
      exit={{
        x: presentationContext.direction === 'forward' ? '-100%' : '100%',
        opacity: 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`w-full flex flex-col items-start h-screen p-20 relative z-10`}
      >
        {children}
      </div>
      <BlurBlob position={1} size='small' color='primary' />
      <BlurBlob position={3} size='large' color='secondary' />
    </motion.div>
  );
};

export default SlideParent;
