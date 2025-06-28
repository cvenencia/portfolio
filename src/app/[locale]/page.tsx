import { FadeInWrapper } from '@/components/FadeInWrapper';
import { Footer } from '@/components/Footer';
import { LinkData, Navbar } from '@/components/Navbar';

import { AboutMe } from './_components/AboutMe';
import { Background } from './_components/Background';
import { Credentials } from './_components/Credentials';
import { Hero } from './_components/Hero';
import { Projects } from './_components/Projects';
import { Skills } from './_components/Skills';
import { Testimonials } from './_components/Testimonials';

const LINKS: LinkData<'root'>[] = [
  { href: '#about-me', translationKey: 'nav.about-me' },
  { href: '#projects', translationKey: 'nav.projects' },
  { href: '#skills', translationKey: 'nav.skills' },
  { href: '#testimonials', translationKey: 'nav.testimonials' },
  { href: '#credentials', translationKey: 'nav.credentials' },
];
export default async function Index() {
  return (
    <FadeInWrapper>
      <Background />
      <Navbar links={LINKS} namespace='root' />
      <main className='px-2'>
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Testimonials />
        <Credentials />
      </main>
      <Footer />
    </FadeInWrapper>
  );
}
