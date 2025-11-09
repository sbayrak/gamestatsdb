import React from 'react';
import { MoveRight, TrendingUp, TrendingDown } from 'lucide-react';

function trendingColor(rank: number, last_week_rank: number) {
  if (rank === last_week_rank) {
    return 'text-gray-300';
  } else if (rank < last_week_rank) {
    return 'text-green-500';
  } else {
    return 'text-red-500';
  }
}

type LastWeekRankIconProps = {
  rank: number;
  last_week_rank: number;
};

export const LastWeekRank = ({
  rank,
  last_week_rank,
}: LastWeekRankIconProps) => {
  const color = trendingColor(rank, last_week_rank);

  return (
    <div className='flex justify-center items-center gap-2'>
      <div>
        {rank === last_week_rank ? (
          <MoveRight className={color} />
        ) : rank < last_week_rank ? (
          <TrendingUp className={color} />
        ) : (
          <TrendingDown className={color} />
        )}
      </div>
      <span className={trendingColor(rank, last_week_rank)}>
        {last_week_rank}
      </span>
    </div>
  );
};
