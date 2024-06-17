import { renderTheme } from '../../styles/render-theme';
import { GridContent } from './index';
import mock from './mock';
import { screen } from '@testing-library/react';
describe('<GridContent', () => {
  it('Should render grid content', () => {
    const { container } = renderTheme(
      <GridContent
        title={mock.title}
        html={mock.html}
        background={mock.background}
      ></GridContent>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should render grid content', () => {
    const { container } = renderTheme(
      <GridContent title={mock.title} html={mock.html} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with background false', () => {
    renderTheme(<GridContent title={mock.title} background={false} />);
    expect(screen.getByRole('heading', mock.title)).toBeInTheDocument();
  });
});
