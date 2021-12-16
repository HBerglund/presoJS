import React from 'react';

interface BulletProps {
  content: string;
}

const Bullet = (props: BulletProps) => {
  return (
    <div className='flex items-center mt-4 mb-2'>
      <div className='p-1 bg-gradient-to-l from-primary to-secondary rounded-full mr-6'>
        <div className='w-6 h-6 rounded-full bg-background'></div>
      </div>
      <span className='text-md text-textPrimary font-semibold'>
        {props.content}
      </span>
    </div>
  );
};

export default Bullet;
