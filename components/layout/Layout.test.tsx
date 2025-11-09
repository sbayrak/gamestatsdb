import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  it('renders children correctly', () => {
    const testContent = 'Test Content';
    render(
      <Layout>
        <div>{testContent}</div>
      </Layout>
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('applies custom className correctly', () => {
    const customClass = 'test-custom-class';
    const { container } = render(
      <Layout className={customClass}>
        <div>Content</div>
      </Layout>
    );

    const layoutDiv = container.firstChild as HTMLElement;
    expect(layoutDiv).toHaveClass(customClass);
    expect(layoutDiv).toHaveClass('bg-transparent'); // checking base class is present
  });
});
