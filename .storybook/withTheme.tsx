import { BaseStyles, ThemeProvider } from '@primer/react'
import { Decorator } from '@storybook/react';

import '@primer/primitives/dist/css/functional/themes/light.css'
import '@primer/css/dist/primer.css'

// ThemeDecorator to wrap stories
export const ThemeDecorator: Decorator = (Story, context) => {
  // Get the current theme from Storybook context
  const themeName = context.globals.theme || 'light';

  return (
    <>
      <ThemeProvider colorMode={themeName}>
        <BaseStyles>
          <Story />
        </BaseStyles>
      </ThemeProvider>
    </>
  );
};
