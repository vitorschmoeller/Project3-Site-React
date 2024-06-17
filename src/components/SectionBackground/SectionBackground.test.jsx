import { screen, render } from '@testing-library/react';
import { SectionBackground } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
describe('<SectionBackground />', () => {
  test('Should render with background light', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <SectionBackground background={false}>
          <h1>Children</h1>
        </SectionBackground>
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('heading', { name: 'Children' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should render with background dark', () => {
    render(
      <ThemeProvider theme={theme}>
        <SectionBackground background={true}>
          <h1>Children</h1>
        </SectionBackground>
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('heading', { name: 'Children' }),
    ).toBeInTheDocument();
  });
});
