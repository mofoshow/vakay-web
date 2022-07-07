import React from 'react';

import { Panel, PanelProps } from '.';

export default {
  title: 'Panel',
  component: Panel,
};

export const Primary = (args: PanelProps) => <Panel {...args} />;
