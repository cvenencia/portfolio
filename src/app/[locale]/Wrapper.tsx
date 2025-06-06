'use client';

import { ReactNode, useState } from 'react';

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
export function Wrapper({ children }: WrapperProps) {
  const [className, setClassName] = useState<string | undefined>(
    'animate-fade-in opacity-0'
  );
  const onAnimationEnd = () => {
    setClassName(undefined);
  };

  return (
    <div onAnimationEnd={onAnimationEnd} className={className}>
      {children}
    </div>
  );
}
