import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import { mockBase } from './mock';
describe('<Base />', () => {
  it('Should render', () => {
    const { container } = renderTheme(<Base {...mockBase}>Children</Base>);
    expect(container).toMatchSnapshot();
  });
});
