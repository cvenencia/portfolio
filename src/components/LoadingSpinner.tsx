import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';
import { ComponentProps } from 'react';

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
