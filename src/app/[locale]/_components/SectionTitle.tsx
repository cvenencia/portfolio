import { ReactNode } from 'react';

import { firaCode } from '@/fonts';
import { cn } from '@/lib/utils';

type SectionTitleProps = {
  children: ReactNode;
};
export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        firaCode.className,
        'flex gap-2 font-bold text-3xl sm:text-5xl',
        'before:content-["<"] after:content-["/>"] before:text-primary after:text-primary'
      )}
    >
      {children}
    </h2>
  );
}
