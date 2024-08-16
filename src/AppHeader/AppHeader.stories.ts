import AppHeader from '.';
import { fn } from '@storybook/test';

export default {
  title: 'Navigation/AppHeader',
  component: AppHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // args: {
  //   onLogin: fn(),
  //   onLogout: fn(),
  //   onCreateAccount: fn(),
  // },
};

export const Example1 = {
  args: {
    productName: "Hydrogen Design",
    avatar: {
      name: "SH",
      badge: { status: 'available' }
    }
  }
};

// export const LoggedOut = {};
