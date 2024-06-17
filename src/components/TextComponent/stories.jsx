import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iste numquam dolores
      temporibus explicabo praesentium sunt quam accusamus laboriosam reiciendis, quasi
      natus mollitia aperiam id eius minus. Saepe, molestias cumque?
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
