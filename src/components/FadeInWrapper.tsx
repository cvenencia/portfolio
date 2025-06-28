'use client';

import { ReactNode, useState } from 'react';

import { cn } from '@/lib/utils';

type WrapperProps = {
  children: ReactNode;
};
/**
 * `backdrop-filter` doesn't work properly when there are multiple
 * overlapping elements with opacity values set.
 *
 * This wrapper removes the fade-in animation and opacity class after
 * the fade is done.
 */
export function FadeInWrapper({ children }: WrapperProps) {
  const [className, setClassName] = useState<string | undefined>(
    'animate-fade-in opacity-0'
  );
  const onAnimationEnd = () => {
    setClassName(undefined);
  };

  return (
    <div
      onAnimationEnd={onAnimationEnd}
      className={cn(className, 'delay-300 ease-in-out-custom')}
    >
      {children}
    </div>
  );
}
