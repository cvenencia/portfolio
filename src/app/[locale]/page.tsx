import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

import { AboutMe } from './_components/AboutMe';
import { Background } from './_components/Background';
import { Credentials } from './_components/Credentials';
import { Hero } from './_components/Hero';
import { Projects } from './_components/Projects';
import { Skills } from './_components/Skills';
import { Testimonials } from './_components/Testimonials';
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
        <Testimonials />
        <Credentials />
      </main>
      <Footer />
    </Wrapper>
  );
}
