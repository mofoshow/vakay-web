import React from 'react';

import { Input, InputProps } from '.';

export default {
  title: 'Input',
  component: Input,
};

export const Primary = (args: InputProps) => <Input {...args} />;
