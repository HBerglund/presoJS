import React from 'react';

interface ButtonProps {
  text: string;
  url: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div
      onClick={() => window.open(props.url, '_blank')}
      className='p-0.5 bg-gradient-to-r from-primary to-tertiary rounded-full cursor-pointer'
    >
      <div className='py-4 px-10 w-full h-full bg-background rounded-full hover:bg-transparent transition-all duration-300'>
        <span className='text-textPrimary capitalize tracking-widest'>
          {props.text}
        </span>
      </div>
    </div>
  );
};

export default Button;
