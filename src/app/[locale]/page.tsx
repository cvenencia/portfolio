import { Navbar } from '@/components/Navbar';

import { AboutMe } from './_components/AboutMe';
import { Background } from './_components/Background';
import { Contact } from './_components/Contact';
import { Credentials } from './_components/Credentials';
import { Hero } from './_components/Hero';
import { Projects } from './_components/Projects';
import { Skills } from './_components/Skills';
import { Wrapper } from './_components/Wrapper';

export default async function Index() {
  return (
    <Wrapper>
      <Background />
      <Navbar overlay />
      <main className='px-2'>
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
    </Wrapper>
  );
}
