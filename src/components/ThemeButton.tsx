'use client';

import { Button } from '@/components/ui/button';
import { useMounted } from '@/hooks/useMounted';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export function ThemeButton() {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const mounted = useMounted();
  const { t } = useTranslation('root');

  if (!mounted) return;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            variant='ghost'
          >
            {isDark ? <Moon /> : <Sun />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {t(isDark ? 'switch-light' : 'switch-dark')}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
