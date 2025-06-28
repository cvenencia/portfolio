'use client';

import { Namespace, ParseKeys } from 'i18next';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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

import { SiteOptionsDropdown } from './SiteOptionsDropdown';
import { Button } from './ui/button';

export type LinkData<N extends Namespace> = {
  href: string;
  translationKey: ParseKeys<N>;
};

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
  const Element = href.startsWith('#') ? 'a' : Link;
  return (
    <Element
      onClick={onClick}
      href={href}
      className={cn(
        'flex gap-2',
        'transition-[opacity,transform] before:transition-[opacity,transform] after:transition-[opacity,transform]',
        'before:content-["<"] after:content-["_/>"] before:text-accent after:text-accent before:translate-x-2 after:-translate-x-2',
        'before:opacity-0 after:opacity-0',
        'hocus-visible:text-primary hocus-visible:before:opacity-100 hocus-visible:after:opacity-100 hocus-visible:after:translate-x-0 hocus-visible:before:translate-x-0',
        size === 'large' && 'text-lg min-[350px]:text-2xl'
      )}
    >
      {children}
    </Element>
  );
}

function HomepageLink() {
  const { t } = useTranslation();
  return (
    <Link href='/'>
      <span className='sr-only'>{t('nav.homepage')}</span>
      <Image
        className='dark:hidden'
        src='/logo-light.png'
        alt='Logo'
        width={32}
        height={32}
      />
      <Image
        className='hidden dark:block'
        src='/logo-dark.png'
        alt='Logo'
        width={32}
        height={32}
      />
    </Link>
  );
}

type NavbarProps<N extends Namespace> = {
  links: LinkData<N>[];
  namespace: N;
};
export function Navbar<N extends Namespace>({
  links,
  namespace,
}: NavbarProps<N>) {
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  const mounted = useMounted();
  const hasScrolled = useViewportBelow('#hero');

  return (
    <header
      className={cn(
        !mounted && 'h-32',
        'z-10 fixed w-full',
        'max-w-screen flex justify-center'
      )}
    >
      <nav
        className={cn(
          'grow bg-background/70 backdrop-blur px-2 py-6',
          'transition-[max-width,background,margin]',
          !hasScrolled && 'max-w-full',
          hasScrolled && 'rounded-lg m-4 container border'
        )}
      >
        <div
          className={cn(
            'container mx-auto',
            'flex justify-between items-center gap-1 lg:gap-4'
          )}
        >
          {mounted &&
            (isSmallScreen ? (
              <Mobile links={links} namespace={namespace} />
            ) : (
              <Desktop links={links} namespace={namespace} />
            ))}
        </div>
      </nav>
    </header>
  );
}

type MobileProps<N extends Namespace> = {
  links: LinkData<N>[];
  namespace: N;
};
function Mobile<N extends Namespace>({ links, namespace }: MobileProps<N>) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation(namespace);
  const { t: tRoot } = useTranslation();

  return (
    <>
      <HomepageLink />
      <div className='flex gap-2'>
        <SiteOptionsDropdown />
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
            <SheetTitle className='sr-only'>
              {tRoot('nav.navigation')}
            </SheetTitle>
            <SheetDescription className='sr-only'>
              {tRoot('nav.navigation')}
            </SheetDescription>
            <nav className='h-full'>
              <ul className='h-full grid gap-8 content-center py-4'>
                {links.map(link => (
                  <li key={link.href}>
                    <NavbarLink
                      href={link.href}
                      onClick={() => setOpen(false)}
                      size='large'
                    >
                      {/* @ts-expect-error Namespace is passed in props, but unable to detect it */}
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

type DesktopProps<N extends Namespace> = {
  links: LinkData<N>[];
  namespace: N;
};
function Desktop<N extends Namespace>({ links, namespace }: DesktopProps<N>) {
  const { t } = useTranslation(namespace);
  return (
    <>
      <HomepageLink />
      <ul className='flex'>
        {links.map(link => (
          <li key={link.href}>
            <NavbarLink href={link.href}>
              {/* @ts-expect-error Namespace is passed in props, but unable to detect it */}
              {t(link.translationKey)}
            </NavbarLink>
          </li>
        ))}
      </ul>
      <SiteOptionsDropdown />
    </>
  );
}
