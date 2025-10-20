import { pxToRem } from './pxToRem';

describe('pxToRem utility function', () => {
  it('should convert pixels to rems with default base', () => {
    expect(pxToRem(16)).toBe('1rem');
    expect(pxToRem(32)).toBe('2rem');
    expect(pxToRem(24)).toBe('1.5rem');
  });
  it('should convert pixels to rems with custom base', () => {
    expect(pxToRem(16, 10)).toBe('1.6rem');
    expect(pxToRem(30, 15)).toBe('2rem');
    expect(pxToRem(45, 9)).toBe('5rem');
  });
});
