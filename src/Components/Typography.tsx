import React, { useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface TypographyProps {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg' | 'xl';
  splitOn?: 'words' | 'chars';
  overflowHidden?: true;
  animateFrom?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right';
}

const Typography: React.FC<TypographyProps> = ({
  children,
  size,
  splitOn,
  overflowHidden,
  animateFrom,
}) => {
  const [elements, setElements] = useState<string[] | undefined>([]);

  const getElements = () => {
    if (splitOn === 'words') {
      return children?.toString().split('((?<=\\s+)|(?=\\s+))');
    }
    if (splitOn === 'chars') {
      return children?.toString().split(/(?!$)/u);
    }
    return ['Victor'];
  };

  const stringArr = getElements();

  console.log(stringArr);

  const getOverflow = () => {
    if (overflowHidden) {
      return 'overflow-hidden';
    }
  };

  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'text-sm';
      case 'md':
        return 'text-md';
      case 'lg':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
    }
  };

  const getAnimation = () => {
    switch (animateFrom) {
      case 'top':
        return { y: 50 };
      case 'bottom':
        return { y: -50 };
      case 'left':
        return { x: 50 };
      case 'right':
        return { x: -50 };
      case 'top-left':
        return { x: 50, y: 50 };
      case 'top-right':
        return { x: -50, y: 50 };
      case 'bottom-left':
        return { x: 50, y: -50 };
      case 'bottom-right':
        return { x: -50, y: -50 };
    }
  };

  stringArr?.map((el, i) => {
    return (
      <motion.span
        key={i}
        initial={getAnimation()}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        className={classNames('text-textPrimary', getSize())}
      >
        {el}
      </motion.span>
    );
  });
  return null; // To remove error

  // if (!stringArr) {
  //   return (
  //     <motion.span
  //       initial={{ x: -100 }}
  //       animate={{ x: 0, y: 0 }}
  //       transition={{ duration: 2 }}
  //       className={classNames('text-textPrimary', getSize())}
  //     >
  //       {children}
  //     </motion.span>
  //   );
  // }
  // return null;
};

export default Typography;
