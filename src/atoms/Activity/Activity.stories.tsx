import React from 'react';

import { Activity, ActivityProps } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Activity',
  component: Activity,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args: ActivityProps) => <Activity {...args} />;

export const Default = Template.bind({});
