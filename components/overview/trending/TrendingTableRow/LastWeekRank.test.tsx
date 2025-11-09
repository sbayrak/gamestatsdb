import React from 'react';

import { render, screen } from '@testing-library/react';
import { LastWeekRank } from './LastWeekRank';
import { LucideProps } from 'lucide-react';

jest.mock('lucide-react', () => ({
  MoveRight: (
    props: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
  ) => <svg data-testid='move-right-icon' {...props} />,
  TrendingUp: (
    props: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
  ) => <svg data-testid='trending-up-icon' {...props} />,
  TrendingDown: (
    props: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
  ) => <svg data-testid='trending-down-icon' {...props} />,
}));

describe('LastWeekRank', () => {
  it('renders the correct icon and color for no change in rank', () => {
    render(<LastWeekRank rank={5} last_week_rank={5} />);

    const icon = screen.getByTestId('move-right-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('text-gray-300');
  });
  it('renders the correct icon and color for improved rank', () => {
    render(<LastWeekRank rank={3} last_week_rank={5} />);

    const icon = screen.getByTestId('trending-up-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('text-green-500');
  });
  it('renders the correct icon and color for declined rank', () => {
    render(<LastWeekRank rank={7} last_week_rank={5} />);

    const icon = screen.getByTestId('trending-down-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('text-red-500');
  });
});
