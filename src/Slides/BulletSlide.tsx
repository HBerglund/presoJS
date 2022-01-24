import React, { Fragment, useCallback, useEffect, useState } from 'react';
import AnimatedText from '../Components/AnimatedText';
import BlurBlob from '../Components/BlurBlob';
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
    <Fragment>
      <SlideParent>
        <div className='flex flex-col items-start h-full w-full'>
          {subTitle && (
            <AnimatedText
              className='text-textPrimary serifHeading text-xs'
              animation='bottom'
              splitOn='chars'
            >
              {subTitle}
            </AnimatedText>
          )}
          {title && (
            <AnimatedText
              className='text-xl text-textPrimary sansHeading w-full'
              animation='bottom'
              splitOn='chars'
              delay={0.25}
            >
              {title}
            </AnimatedText>
          )}
          <div
            className='flex h-full w-full
           flex-col flex-wrap ml-12 mt-16'
          >
            {visibleBullets.map((bullet: string, i: number) => (
              <Bullet key={i} content={bullet} />
            ))}
          </div>
        </div>
      </SlideParent>
      <BlurBlob position={2} size='small' color='secondary' />
      <BlurBlob position={3} size='large' color='primary' />
    </Fragment>
  );
};

export default BulletSlide;
