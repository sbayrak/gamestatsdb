import { Apple, Bird, Grid2X2 } from 'lucide-react';
import { Game } from '../types';

type PlatformsProps = Pick<Game, 'platforms'>;

export default function Platforms({ platforms }: PlatformsProps) {
  return (
    <div className='flex justify-center items-center gap-2'>
      {platforms.windows && <Grid2X2 width={16} />}
      {platforms.mac && <Apple width={16} />}
      {platforms.linux && <Bird width={16} />}
    </div>
  );
}
