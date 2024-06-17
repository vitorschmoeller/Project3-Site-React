import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import mock from './mock';
describe('<GridImage />', () => {
  it('Should Render', () => {
    const { container } = renderTheme(
      <GridImage
        background
        title={mock.title}
        description={mock.description}
        grid={mock.grid}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('shoul render without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined}></GridImage>,
    );
    expect(container).toMatchSnapshot();
  });
});
