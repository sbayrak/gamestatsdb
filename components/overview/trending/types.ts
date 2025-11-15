export interface GetMostPlayedGames {
  response: {
    rollup_date: number;
    ranks: Array<GetMostPlayedGamesResponse>;
  };
}

export interface GetMostPlayedGamesResponse {
  rank: number;
  appid: number;
  last_week_rank: number;
  peak_in_game: number;
}

type Platforms = {
  windows: boolean;
  mac: boolean;
  linux: boolean;
};

type Genre = {
  id: string;
  description: string;
};

export interface GameDetails {
  [key: string]: {
    success: boolean;
    data: Game;
  };
}

export interface Game {
  appid: number;
  rank: number;
  name: string;
  header_image: string;
  peak_in_game: number;
  last_week_rank: number;
  is_free: boolean;
  price_overview?: {
    final_formatted: string;
  };
  platforms: Platforms;
  genres?: Array<Genre>;
}
