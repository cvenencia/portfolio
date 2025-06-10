import { ReactNode } from 'react';

import FrontendMentor from '@/assets/social-icons/frontend-mentor.svg';
import Github from '@/assets/social-icons/github.svg';
import LinkedIn from '@/assets/social-icons/linkedin.svg';
import Upwork from '@/assets/social-icons/upwork.svg';
import { CopyEmailButton } from '@/components/CopyEmailButton';

import { Button } from './ui/button';
import { Separator } from './ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

type SocialLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
};
function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='outline'
            size='sm'
            asChild
            className='rounded-full size-8'
          >
            <a href={href} target='_blank'>
              {children}
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function SocialLinks() {
  return (
    <>
      <SocialLink href='https://github.com/cvenencia' label='Github'>
        <Github />
      </SocialLink>
      <SocialLink href='https://linkedin.com/in/cvenencia' label='LinkedIn'>
        <LinkedIn />
      </SocialLink>
      <SocialLink
        href='https://www.upwork.com/freelancers/~01ddebd8e85c498f06'
        label='Upwork'
      >
        <Upwork />
      </SocialLink>
      <SocialLink
        href='https://www.frontendmentor.io/profile/cvenencia'
        label='Frontend Mentor'
      >
        <FrontendMentor />
      </SocialLink>
    </>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='grid place-items-center gap-6 py-16'>
      <Separator />
      <div className='flex gap-2 justify-center flex-wrap items-center'>
        <SocialLinks />
      </div>
      <CopyEmailButton />
      <div className='text-sm'>{year} © Carlos Venencia</div>
    </footer>
  );
}
