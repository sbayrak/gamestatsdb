import { render, screen } from '@testing-library/react';
import Typography from './Typography';

describe('Typography', () => {
  it('renders heading text with correct classes', () => {
    const testText = 'Heading Text';
    render(<Typography text={testText} type='heading' />);
    const typographyElement = screen.getByText(testText);

    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveClass('text-primary');
    expect(typographyElement).toHaveClass('text-4xl');
  });

  it('renders subtitle text with correct classes', () => {
    const testText = 'Subtitle Text';
    render(<Typography text={testText} type='subtitle' />);
    const typographyElement = screen.getByText(testText);

    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveClass('text-primary');
    expect(typographyElement).toHaveClass('text-2xl');
  });
});
