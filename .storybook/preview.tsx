import { Preview } from '@storybook/react';
import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <FluentProvider theme={webLightTheme}>
          <Story />
        </FluentProvider>
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ["Concepts", "Components"],
      },
    },
  },
};



export default preview;
