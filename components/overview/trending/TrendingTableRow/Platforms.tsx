import { Game } from '@/app/api/trending';
import { Apple, Bird, Grid2X2 } from 'lucide-react';

type PlatformsProps = Pick<Game, 'platforms'>;

export default function Platforms({ platforms }: PlatformsProps) {
  return (
    <div className='flex justify-center items-center gap-2'>
      {platforms.windows && <Grid2X2 />}
      {platforms.mac && <Apple />}
      {platforms.linux && <Bird />}
    </div>
  );
}
