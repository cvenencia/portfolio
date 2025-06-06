import { Navbar } from '@/components/Navbar';

import { AboutMe } from './_components/AboutMe';
import { Background } from './_components/Background';
import { Hero } from './_components/Hero';
import { Wrapper } from './_components/Wrapper';

export default async function Index() {
  return (
    <Wrapper>
      <Background />
      <Navbar overlay />
      <main className='text-lg'>
        <Hero />
        <AboutMe />
      </main>
    </Wrapper>
  );
}
