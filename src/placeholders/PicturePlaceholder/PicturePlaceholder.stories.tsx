import { PicturePlaceholder, PicturePlaceholderProps } from './';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  argTypes: {
    width: 100,
    height: 100,
  },
  title: 'Button',
  component: PicturePlaceholder,
};

export const Primary = (args: PicturePlaceholderProps) => (
  <PicturePlaceholder {...args} />
);
