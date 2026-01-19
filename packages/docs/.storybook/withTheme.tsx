import { BaseStyles, ThemeProvider } from '@primer/react'
import { Decorator } from '@storybook/react';

import '@primer/primitives/dist/css/functional/themes/light.css'
import '@primer/css/dist/primer.css'
import { UserProvider, User } from '@miners-online/hydrogen-ui';

// ThemeDecorator to wrap stories
export const ThemeDecorator: Decorator = (Story, context) => {
  // Get the current theme from Storybook context
  const themeName = context.globals.theme || 'light';
  
  const initialUser = new User(
    '12345',
    'Testing User',
    'testing.user@example.com'
  )

  return (
    <>
      <ThemeProvider colorMode={themeName}>
        <BaseStyles>
          <UserProvider initialUser={initialUser}>
            <Story />
          </UserProvider>
        </BaseStyles>
      </ThemeProvider>
    </>
  );
};
