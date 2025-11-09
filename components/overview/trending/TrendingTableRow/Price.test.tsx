import { render } from '@testing-library/react';
import Price from './Price';

describe('Price', () => {
  it('renders "Free" when the game is free', () => {
    const { getByText } = render(<Price is_free={true} />);
    expect(getByText('Free')).toBeInTheDocument();
  });
  it('renders the price when the game is not free and price is provided', () => {
    const { getByText } = render(<Price is_free={false} price='$19.99' />);
    expect(getByText('$19.99')).toBeInTheDocument();
  });
});
