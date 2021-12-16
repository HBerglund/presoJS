import React, { useCallback, useEffect, useState } from 'react';
import Bullet from '../Components/Bullet';
import SlideParent from '../Components/SlideParent';

interface BulletSlideProps {
  title?: string;
  subTitle?: string;
  bullets: string[];
}

const BulletSlide = ({ title, subTitle, bullets }: BulletSlideProps) => {
  const [visibleBullets, setVisibleBullets] = useState<string[]>([]);
  const [nextBullet, setNextBullet] = useState(0);
  let allBulletsVisible = false; // Might need to be a state

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (nextBullet < bullets.length) {
          setVisibleBullets((prev) => [...prev, bullets[nextBullet]]);
          setNextBullet((prev) => prev + 1);
        } else {
          allBulletsVisible = true;
        }
        e.preventDefault();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleBullets]
  );

  useEffect(() => {
    window.addEventListener('keyup', keyPress);
    return () => window.removeEventListener('keyup', keyPress);
  }, [keyPress]);

  console.log(visibleBullets);
  console.log(nextBullet);

  return (
    <SlideParent>
      <div className='flex flex-col items-start h-full w-full'>
        {title && (
          <span className='text-lg text-textPrimary uppercase tracking-heading font-bold text-center w-full'>
            {title}
          </span>
        )}
        {subTitle && (
          <span className='text-md text-primary text-center font-semibold w-full mt-4'>
            {subTitle}
          </span>
        )}
        <div className='flex h-full flex-col flex-wrap mt-16'>
          {visibleBullets.map((bullet: string, i: number) => (
            <Bullet key={i} content={bullet} />
          ))}
        </div>
      </div>
    </SlideParent>
  );
};

export default BulletSlide;
