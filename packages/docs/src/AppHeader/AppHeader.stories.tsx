import { AppHeader } from '@miners-online/hydrogen-ui';
import { fn } from 'storybook/test';

import React from 'react';

export default {
  title: 'Components/Navigation/AppHeader',
  component: AppHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // args: {
  //   onLogin: fn(),
  //   onLogout: fn(),
  //   onCreateAccount: fn(),
  // },
  args: {
    searchProps: {
      onChange: fn()
    }
  }
};

export const DefaultState = {
  args: {
    productName: 'Default Product',
  },
};

