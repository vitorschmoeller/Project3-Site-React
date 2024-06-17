import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer h1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et
          deserunt, accusamus atque quis perferendis libero accusantium pariatur
          vel quod amet earum quas odit possimus corporis praesentium,
          blanditiis quibusdam expedita?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args}></SectionContainer>
    </div>
  );
};
