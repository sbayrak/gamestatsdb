import { Game, GameDetails, GetMostPlayedGames } from './types';

export async function getTrendingGames(): Promise<Game[]> {
  const res = await fetch(
    'https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/',
    {
      next: { revalidate: 3600 },
    }
  );

  const data: GetMostPlayedGames = await res.json();
  const games = data.response.ranks.slice(0, 5);

  // Fetch details for each game
  const detailedGames: Array<Game> = await Promise.all(
    games.map(async (game) => {
      const detailsRes = await fetch(
        `https://store.steampowered.com/api/appdetails?appids=${game.appid}&cc=de&l=english`,

        {
          next: { revalidate: 3600 },
        }
      );

      const detailsData = (await detailsRes.json()) as GameDetails;
      const info = detailsData[game.appid]?.data;

      if (info.name.includes('battlefield')) {
        console.log('trending log ', info);
      }

      return {
        appid: game.appid,
        rank: game.rank,
        name: info?.name,
        header_image: info?.header_image,
        peak_in_game: game.peak_in_game,
        last_week_rank: game.last_week_rank,
        is_free: info?.is_free,
        price_overview: info?.price_overview,
        platforms: info?.platforms,
      };
    })
  );

  return detailedGames;
}
