import Typography from '@/components/typography/Typography';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getTrendingGames } from './api';
import TrendingTableRow from './TrendingTableRow/TrendingTableRow';
import Layout from '@/components/layout/Layout';

export default async function Trending() {
  const games = await getTrendingGames();

  return (
    <Layout>
      <div className='bg-primary/5 relative border border-primary/30 border-solid rounded mx-auto p-2 shadow'>
        <Typography text='Trending Games' type='subtitle' />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className='text-center font-bold'>Name</TableHead>
              <TableHead className='text-center'>Peak Players</TableHead>
              <TableHead className='text-center'>Last Week Rank</TableHead>
              <TableHead className='text-center'>Platforms</TableHead>
              <TableHead className='text-center'>Price</TableHead>
              <TableHead className='text-center'>Steam Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {games.map((game) => (
              <TrendingTableRow
                key={game.appid}
                appid={game.appid}
                name={game.name}
                is_free={game.is_free}
                header_image={game.header_image}
                last_week_rank={game.last_week_rank}
                platforms={game.platforms}
                rank={game.rank}
                peak_in_game={game.peak_in_game}
                price={game.price_overview?.final_formatted}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
}
