import { render, screen } from '@testing-library/react';
import Logo from './logo';

describe('Logo tests', () => {
  it('should render logo and text', () => {
    render(<Logo />);

    const logoImg = screen.getByAltText('gamestatsdb_logo');
    const logoText = screen.getByText(/Gamestats/i);
    const dbText = screen.getByText(/DB/i);

    expect(logoImg).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
    expect(dbText).toBeInTheDocument();
  });

  it('should apply correct size and textSize classes', () => {
    const size = 64;
    const { container } = render(<Logo size={size} textSize={'text-2xl'} />);

    const logoImg = screen.getByAltText('gamestatsdb_logo') as HTMLImageElement;
    const logoTextDiv = container.querySelector('div.font-bold');

    expect(logoImg.width).toBe(size);
    expect(logoImg.height).toBe(size);
    expect(logoTextDiv).toHaveClass(`text-2xl`);
  });
});
