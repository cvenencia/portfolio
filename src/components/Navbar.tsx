'use client';

import { ParseKeys } from 'i18next';
import { Menu } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useMounted } from '@/hooks/useMounted';
import { useViewportBelow } from '@/hooks/useViewportBelow';
import { cn } from '@/lib/utils';

import { LanguagesDropdown } from './LanguagesDropdown';
import { ThemeButton } from './ThemeButton';
import { Button } from './ui/button';

type LinkData = {
  href: string;
  translationKey: ParseKeys<'root'>;
};
const LINKS: LinkData[] = [
  { href: '#about-me', translationKey: 'nav.about-me' },
  { href: '#projects', translationKey: 'nav.projects' },
  { href: '#skills', translationKey: 'nav.skills' },
  { href: '#testimonials', translationKey: 'nav.testimonials' },
  { href: '#credentials', translationKey: 'nav.credentials' },
  { href: '#contact', translationKey: 'nav.contact' },
];

type NavbarLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  size?: 'normal' | 'large';
};
function NavbarLink({
  href,
  children,
  onClick,
  size = 'normal',
}: NavbarLinkProps) {
  return (
    <a
      onClick={onClick}
      href={href}
      className={cn(
        'flex',
        'transition-[opacity,transform] before:transition-[opacity,transform] after:transition-[opacity,transform]',
        'before:content-["<"] after:content-["_/>"] before:text-accent after:text-accent before:translate-x-2 after:-translate-x-2',
        'before:opacity-0 after:opacity-0',
        'hocus-visible:text-primary hocus-visible:before:opacity-100 hocus-visible:after:opacity-100 hocus-visible:after:translate-x-0 hocus-visible:before:translate-x-0',
        size === 'normal' && 'lg:gap-2',
        size === 'large' && 'text-lg min-[350px]:text-2xl gap-2'
      )}
    >
      {children}
    </a>
  );
}

type NavbarProps = {
  overlay?: boolean;
};
export function Navbar({ overlay }: NavbarProps) {
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  const mounted = useMounted();
  const hasScrolled = useViewportBelow('#hero');

  return (
    <header
      className={cn(
        !mounted && 'h-32',
        overlay ? 'z-10 fixed w-full' : 'sticky top-0',
        'max-w-screen flex justify-center'
      )}
    >
      <nav
        className={cn(
          'grow bg-background/70 backdrop-blur px-2 py-6',
          'transition-[max-width,background,margin]',
          !hasScrolled && 'max-w-full',
          hasScrolled && 'rounded-lg mt-4 container border'
        )}
      >
        <div
          className={cn(
            'container mx-auto',
            'flex justify-between items-center gap-1 lg:gap-4'
          )}
        >
          {mounted && (isSmallScreen ? <Mobile /> : <Desktop />)}
        </div>
      </nav>
    </header>
  );
}

function Mobile() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <LanguagesDropdown />
      <div className='flex gap-2'>
        <ThemeButton />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild onClick={() => setOpen(true)}>
            <Button variant='ghost'>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side='right'
            className='max-h-screen max-w-[250px] overflow-auto'
          >
            <SheetTitle className='sr-only'>{t('nav.navigation')}</SheetTitle>
            <SheetDescription className='sr-only'>
              {t('nav.navigation')}
            </SheetDescription>
            <nav className='h-full'>
              <ul className='h-full grid gap-8 content-center py-4'>
                {LINKS.map(link => (
                  <li key={link.href}>
                    <NavbarLink
                      href={link.href}
                      onClick={() => setOpen(false)}
                      size='large'
                    >
                      {t(link.translationKey)}
                    </NavbarLink>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

function Desktop() {
  const { t } = useTranslation();
  return (
    <>
      <LanguagesDropdown />
      <ul className='flex'>
        {LINKS.map(link => (
          <li key={link.href}>
            <NavbarLink href={link.href}>{t(link.translationKey)}</NavbarLink>
          </li>
        ))}
      </ul>
      <ThemeButton />
    </>
  );
}
