import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  test('Should render a go to top button', () => {
    const { container } = renderTheme(<GoTop></GoTop>);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchSnapshot();
  });
});
