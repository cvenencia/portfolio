import { Navbar } from '@/components/Navbar';

import { Background } from './_components/Background';
import { Hero } from './_components/Hero';
import { Wrapper } from './_components/Wrapper';

export default async function Index() {
  return (
    <Wrapper>
      <Background />
      <Navbar overlay />
      <main>
        <Hero />
      </main>
    </Wrapper>
  );
}
