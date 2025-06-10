'use client';

import { useEffect, useRef } from 'react';

import BackgroundImage from '@/assets/background.svg';
import { cn } from '@/lib/utils';
import { random } from '@/utils/numbers';

export function Background() {
  const ref = useRef<SVGElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (element == null) return;

    const trails = element.querySelectorAll<HTMLElement>('[data-trails] use');
    trails.forEach(trail => {
      trail.style.animationDelay = `${random(-30, 0)}s`;
    });
  }, []);

  return (
    <div className='pointer-events-none overflow-hidden absolute h-screen w-full grid place-items-center'>
      <BackgroundImage
        className={cn(
          '[&_[data-trails]_use]:animate-slow-rotate-pulse',
          'min-h-full min-w-full opacity-80 dark:opacity-50',
          'sm:[--first:15%] sm:[--second:85%] [--first:5%] [--second:95%]',
          '[mask-image:linear-gradient(to_top,_transparent_var(--first),_red_50%,_transparent_var(--second))]'
        )}
        ref={ref}
      />
    </div>
  );
}
