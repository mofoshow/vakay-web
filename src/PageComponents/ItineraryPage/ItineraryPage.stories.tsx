import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItineraryPage, ItineraryPageProps } from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/ItineraryPage',
  component: ItineraryPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args: ItineraryPageProps) => <ItineraryPage {...args} />;

export const Default = Template.bind({});
