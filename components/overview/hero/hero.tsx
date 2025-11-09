import Logo from '@/components/header/logo/logo';
import Layout from '@/components/layout/Layout';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { words } from './constants';

export default function Hero() {
  return (
    <Layout>
      <section className='flex flex-col items-center justify-center overflow-hidden'>
        <Logo size={64} textSize='text-4xl' />
        <h3 className='text-3xl'>
          Search for{' '}
          <TypingAnimation
            words={words}
            showCursor
            loop
            className='text-primary font-bold'
          />
        </h3>
      </section>
    </Layout>
  );
}
