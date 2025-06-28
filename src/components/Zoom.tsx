'use client';

import { ComponentProps, PointerEvent, ReactNode, useState } from 'react';

import { cn } from '@/lib/utils';

type ZoomProps = {
  children: ReactNode;
} & ComponentProps<'div'>;
export function Zoom({ children, ...props }: ZoomProps) {
  const [zoomedInLevel, setZoomedInLevel] = useState(false);
  const [moveEnabled, setMoveDisabled] = useState(true);

  function updateVariables(e: PointerEvent<HTMLDivElement>) {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();

    if (e.pointerType === 'mouse') {
      const xInElement = e.clientX - rect.x;
      const yInElement = e.clientY - rect.y;
      const xPercentage = ((xInElement - rect.width / 2) / rect.width) * 100;
      const yPercentage = ((yInElement - rect.height / 2) / rect.height) * 100;

      element.style.setProperty('--x', `${-xPercentage}%`);
      element.style.setProperty('--y', `${-yPercentage}%`);
      return;
    }

    const xPercentageMoved = (e.movementX / rect.width) * 100;
    const yPercentageMoved = (e.movementY / rect.height) * 100;
    const currentX =
      parseFloat(element.style.getPropertyValue('--x').replace('%', '')) || 0;
    const currentY =
      parseFloat(element.style.getPropertyValue('--y').replace('%', '')) || 0;
    const newX = Math.max(Math.min(currentX + xPercentageMoved, 50), -50);
    const newY = Math.max(Math.min(currentY + yPercentageMoved, 50), -50);
    element.style.setProperty('--x', `${newX}%`);
    element.style.setProperty('--y', `${newY}%`);
  }
  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (e.button !== 0) return;
    setZoomedInLevel(zoomedIn => {
      if (!zoomedIn) {
        setMoveDisabled(false);
        setTimeout(() => setMoveDisabled(true), 150);
      }
      return !zoomedIn;
    });
    updateVariables(e);
  }
  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!zoomedInLevel || !moveEnabled) return;
    updateVariables(e);
  }

  return (
    <div
      className={cn(props.className, 'overflow-hidden')}
      onClick={onPointerDown}
      onPointerMove={onPointerMove}
    >
      <div
        className={cn(
          'w-full h-full relative select-none',
          zoomedInLevel ? 'cursor-zoom-out' : 'cursor-zoom-in',
          zoomedInLevel && 'scale-[200%] translate-x-[--x] translate-y-[--y]',
          (!zoomedInLevel || !moveEnabled) && 'transition-transform'
        )}
      >
        {children}
      </div>
    </div>
  );
}
