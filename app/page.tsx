import Hero from '@/components/overview/hero/hero';
import Trending from '@/components/overview/trending/Trending';

export default async function Home() {
  return (
    <div>
      <Hero />
      <Trending />
    </div>
  );
}
