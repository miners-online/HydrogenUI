import { Preview } from '@storybook/react';
import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Decorator } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// Create a decorator that wraps stories with FluentProvider
export const withFluentProvider: Decorator = (Story) => (
  <FluentProvider theme={webLightTheme}>
    <Story />
  </FluentProvider>
);

export default preview;

export const decorators = [withFluentProvider];
