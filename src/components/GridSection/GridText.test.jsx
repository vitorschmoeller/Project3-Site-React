import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';
import mock from './mock';
describe('<GridText />', () => {
  it('Should render with background', () => {
    const { container } = renderTheme(
      <GridText
        grid={mock.grid}
        description={mock.description}
        title={mock.title}
        background={true}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should render without background', () => {
    const { container } = renderTheme(
      <GridText
        grid={mock.grid}
        description={mock.description}
        title={mock.title}
        background={undefined}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
