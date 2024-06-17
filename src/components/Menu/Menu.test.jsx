import { screen } from '@testing-library/react';
import { Menu } from '.';
import 'jest-styled-components';
import { renderTheme } from '../../styles/render-theme';
import linksMock from '../NavLinks/mock';
import { theme } from '../../styles/theme';
import { fireEvent } from '@testing-library/react';
const logoData = {
  text: 'Logo',
  link: '#target',
  srcImg: '',
};

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('Should render menu mobile and button for open and close menu', () => {
    renderTheme(<Menu logoData={logoData} links={linksMock} />);

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should no render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(screen.queryByRole('navigation', { name: 'Main menu' }).firstChild)
      .not.toBeInTheDocument;
    expect(container).toMatchSnapshot();
  });
});
