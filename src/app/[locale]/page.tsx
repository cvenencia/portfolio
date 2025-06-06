import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';

import { Wrapper } from './Wrapper';

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
