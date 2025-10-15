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
});
