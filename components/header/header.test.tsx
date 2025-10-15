import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header tests', () => {
  it('should render header with logo, search, and theme switch', () => {
    render(<Header />);

    const logo = screen.getByAltText('gamestatsdb_logo');
    const searchInput = screen.getByPlaceholderText(/Search/i);
    const themeSwitchButton = screen.getByRole('button', {
      name: /toggle theme/i,
    });

    expect(logo).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(themeSwitchButton).toBeInTheDocument();
  });
});
