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

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (nextBullet < bullets.length) {
          setVisibleBullets((prev) => [...prev, bullets[nextBullet]]);
          setNextBullet((prev) => prev + 1);
        }
      }
      return;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nextBullet]
  );

  useEffect(() => {
    window.addEventListener('keyup', keyPress);
    return () => window.removeEventListener('keyup', keyPress);
  }, [keyPress]);

  return (
    <SlideParent>
      <div className='flex flex-col items-start h-full w-full'>
        {subTitle && (
          <span className='text-textPrimary serifHeading text-xs mt-4'>
            {subTitle}
          </span>
        )}
        {title && (
          <span className='text-xl text-textPrimary sansHeading w-full'>
            {title}
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
