import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSwitch from './theme-switch';

const setThemeMock = jest.fn();
jest.mock('next-themes', () => ({
  useTheme: () => ({ setTheme: setThemeMock }),
}));

describe('ThemeSwitch tests', () => {
  it('should render theme switch button', () => {
    render(<ThemeSwitch />);

    const button = screen.getByRole('button', { name: /toggle theme/i });
    const sunIcon = screen.getByTestId('sun-icon');
    const moonIcon = screen.getByTestId('moon-icon');

    expect(button).toBeInTheDocument();
    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
  });

  it('should toggle theme on button click', async () => {
    const user = userEvent.setup();

    render(<ThemeSwitch />);

    const button = screen.getByRole('button', { name: /toggle theme/i });

    await user.click(button);

    expect(setThemeMock).toHaveBeenCalled();
  });
});
