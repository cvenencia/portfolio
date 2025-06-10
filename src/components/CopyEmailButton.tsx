'use client';

import { Copy } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';

import { Button, ButtonProps } from './ui/button';

type CopyButtonProps = {
  copyValue: string;
} & ButtonProps;
export function CopyButton({ copyValue, children, ...props }: CopyButtonProps) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  return (
    <Button
      {...props}
      className={cn('group relative', props.className)}
      onClick={e => {
        const element = e.currentTarget;
        navigator.clipboard.writeText(copyValue);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          element.blur();
        }, 5000);
      }}
    >
      {children}
      <div
        className={cn(
          'flex gap-2 items-center justify-center rounded-[inherit] backdrop-blur',
          'absolute inset-0 bg-accent/50 text-accent-foreground',
          'origin-top-left transition-transform scale-0 group-hover:scale-100 group-focus-within:scale-100',
          copied && 'scale-100'
        )}
      >
        <Copy />
        {t(copied ? 'copied' : 'copy')}
      </div>
    </Button>
  );
}
