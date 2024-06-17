import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumn } from '.';
import mock from './mock';
describe('<GridTwoColumn />', () => {
  it('Should render GridTwoColumn', () => {
    const { container } = renderTheme(
      <GridTwoColumn {...mock}></GridTwoColumn>,
    );

    expect(
      screen.getByRole('heading', { name: 'Grid Two Column' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
