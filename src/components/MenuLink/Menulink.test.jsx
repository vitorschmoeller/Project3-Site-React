import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  test('should render a link', () => {
    renderTheme(<MenuLink link="https://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  test('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  test('should render open in a new tab', () => {
    const { container } = renderTheme(
      <MenuLink link="https://localhost" newTab={false}>
        Children
      </MenuLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
