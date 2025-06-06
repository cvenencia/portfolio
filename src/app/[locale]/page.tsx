import { Navbar } from '@/components/Navbar';

import { Hero } from './_components/Hero';
import { Wrapper } from './_components/Wrapper';

export default async function Index() {
  return (
    <Wrapper>
      <Navbar overlay />
      <main>
        <Hero />
      </main>
    </Wrapper>
  );
}
