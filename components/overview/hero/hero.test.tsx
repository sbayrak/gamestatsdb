import { render, screen } from '@testing-library/react';
import Hero from './hero';

jest.mock('@/components/ui/typing-animation', () => ({
  TypingAnimation: () => <span>some text</span>,
}));

describe('Hero tests', () => {
  it('should render Hero component', () => {
    render(<Hero />);

    const logoElement = screen.getByRole('img');
    const searchForElement = screen.getByText(/Search for/i);

    expect(logoElement).toBeInTheDocument();
    expect(searchForElement).toBeInTheDocument();
  });
});
