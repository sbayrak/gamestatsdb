import { render, screen } from '@testing-library/react';
import Trending from './Trending';

// Setup fetch mock
const fetchMock = jest.fn();
globalThis.fetch = fetchMock;

describe('Trending Component', () => {
  beforeEach(() => {
    fetchMock.mockReset();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render correctly', async () => {
    // Mock the first fetch call to Steam Charts API
    const mockMostPlayedGames = {
      response: {
        ranks: [
          { appid: 570, rank: 1, peak_in_game: 500000, last_week_rank: 1 },
          { appid: 730, rank: 2, peak_in_game: 400000, last_week_rank: 2 },
        ],
      },
    };

    // Mock the second fetch calls to Steam Store API
    const mockGameDetails: Record<
      string,
      {
        data: {
          name: string;
          header_image: string;
          is_free: boolean;
          platforms: { windows: boolean; mac: boolean; linux: boolean };
        };
      }
    > = {
      '570': {
        data: {
          name: 'Dota 2',
          header_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg',
          is_free: true,
          platforms: { windows: true, mac: true, linux: true },
        },
      },
      '730': {
        data: {
          name: 'Counter-Strike: Global Offensive',
          header_image:
            'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg',
          is_free: true,
          platforms: { windows: true, mac: true, linux: true },
        },
      },
    };

    // Setup fetch mock implementations
    fetchMock.mockImplementation((url: string) => {
      if (url.includes('GetMostPlayedGames')) {
        return Promise.resolve({
          json: () => Promise.resolve(mockMostPlayedGames),
        });
      }
      if (url.includes('appdetails')) {
        const appId = url.match(/appids=(\d+)/)?.[1] || '';
        return Promise.resolve({
          json: () => Promise.resolve({ [appId]: mockGameDetails[appId] }),
        });
      }
      return Promise.reject(new Error('Not found'));
    });

    render(await Trending());

    // Check if game names are rendered
    expect(await screen.findByText('Trending Games')).toBeInTheDocument();
    expect(await screen.findByText('Dota 2')).toBeInTheDocument();
    expect(
      await screen.findByText('Counter-Strike: Global Offensive')
    ).toBeInTheDocument();

    // Verify API calls
    expect(fetchMock).toHaveBeenCalledTimes(3); // One for trending + two for game details
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/',
      expect.any(Object)
    );
  });
});
