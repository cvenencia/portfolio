import { AboutMe } from './_components/AboutMe';
import { Background } from './_components/Background';
import { Credentials } from './_components/Credentials';
import { Hero } from './_components/Hero';
import { Projects } from './_components/Projects';
import { Skills } from './_components/Skills';
import { Testimonials } from './_components/Testimonials';

export default async function Index() {
  return (
    <>
      <Background />
      <main className='px-2'>
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Testimonials />
        <Credentials />
      </main>
    </>
  );
}
