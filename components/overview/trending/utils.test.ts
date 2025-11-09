import { steamAppDetailsUrl } from './utils';

describe('utils tests', () => {
  it('should give proper steam app detail url', () => {
    const appid = '12345';
    const expectedUrl = `https://store.steampowered.com/app/${appid}`;
    const result = steamAppDetailsUrl(appid);
    expect(result).toBe(expectedUrl);
  });
});
