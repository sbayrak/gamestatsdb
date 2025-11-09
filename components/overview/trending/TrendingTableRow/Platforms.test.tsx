import { render, screen } from '@testing-library/react';
import Platforms from './Platforms';

jest.mock('lucide-react', () => ({
  Grid2X2: () => <div data-testid='Grid2X2' />,
  Apple: () => <div data-testid='Apple' />,
  Bird: () => <div data-testid='Bird' />,
}));

describe('Platforms', () => {
  const defaultProps = {
    windows: false,
    mac: true,
    linux: true,
  };

  it('renders "Free" when the game is free', () => {
    render(<Platforms platforms={defaultProps} />);
    expect(screen.getByTestId('Apple')).toBeInTheDocument();
    expect(screen.getByTestId('Bird')).toBeInTheDocument();
    expect(screen.queryByTestId('Grid2X2')).not.toBeInTheDocument();
  });
});
