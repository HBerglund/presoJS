import React from 'react';

interface Props {
  content: string;
}

const Bullet = (props: Props) => {
  return (
    <div className='flex items-center mt-2 mb-2'>
      <div className='w-4 h-4 bg-black mr-6'></div>
      <span className='text-body text-textPrimary uppercase font-bold'>
        {props.content}
      </span>
    </div>
  );
};

export default Bullet;
