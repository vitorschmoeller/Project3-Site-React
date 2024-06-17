import { Heading } from '.';
//importando component para o story book
export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
    colorDark: true,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Dark = (args) => <Heading {...args} />;
export const Light = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  args: {
    children: 'O texto está claro',
    colorDark: false,
  },
};
