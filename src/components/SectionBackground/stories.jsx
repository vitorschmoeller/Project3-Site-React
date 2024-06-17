import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aliquam
          natus dolores nam perspiciatis odio alias iusto fugiat. Sint veritatis
          veniam minus soluta repellat atque quidem molestias, sunt commodi aut.
        </p>
      </>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
