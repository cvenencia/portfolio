import { LoaderCircle } from 'lucide-react';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export function LoadingSpinner({
  className,
  ...props
}: ComponentProps<typeof LoaderCircle>) {
  return (
    <LoaderCircle
      className={cn('animate-spin h-4 w-4', className)}
      {...props}
    />
  );
}
