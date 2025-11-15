import { TableCell, TableRow } from '@/components/ui/table';
import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { steamAppDetailsUrl } from '../utils';
import { LastWeekRank } from './LastWeekRank';
import Platforms from './Platforms';
import Price from './Price';

interface TrendingTableRowProps {
  appid: number;
  name: string;
  header_image: string;
  peak_in_game: number;
  last_week_rank: number;
  rank: number;
  is_free: boolean;
  price?: string;
  platforms: {
    windows: boolean;
    mac: boolean;
    linux: boolean;
  };
}

export default function TrendingTableRow({
  appid,
  header_image,
  is_free,
  last_week_rank,
  name,
  peak_in_game,
  platforms,
  price,
  rank,
}: TrendingTableRowProps) {
  const peakInGameFormatted = new Intl.NumberFormat('de-DE').format(
    peak_in_game
  );

  return (
    <TableRow>
      <TableCell>
        <Image
          src={header_image}
          alt='some alt'
          className='rounded'
          width={150}
          height={150}
        />
      </TableCell>
      <TableCell className='text-center font-bold'>{name}</TableCell>
      <TableCell className='text-center font-bold'>
        {peakInGameFormatted}
      </TableCell>
      <TableCell className='text-center font-bold  h-full'>
        <LastWeekRank rank={rank} last_week_rank={last_week_rank} />
      </TableCell>
      <TableCell className='text-center h-full'>
        <Platforms platforms={platforms} />
      </TableCell>
      <TableCell className='text-center h-full'>
        <Price is_free={is_free} price={price} />
      </TableCell>
      <TableCell className='text-center h-full'>
        <Link
          className='flex justify-center items-center hover:text-primary transition ease-in-out p-2'
          href={steamAppDetailsUrl(appid.toString())}
          target='_blank'
        >
          <SquareArrowOutUpRight />
        </Link>
      </TableCell>
    </TableRow>
  );
}
