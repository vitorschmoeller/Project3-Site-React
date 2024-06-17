import { GridTwoColumn } from '.';
import mock from './mock';
export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: mock,
};

export function Template(args) {
  return (
    <div>
      <GridTwoColumn {...args}></GridTwoColumn>
    </div>
  );
}
