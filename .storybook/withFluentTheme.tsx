import React from 'react';
import { FluentProvider, webLightTheme, webDarkTheme, Theme } from '@fluentui/react-components';
import { Decorator } from '@storybook/react';

// Define available themes
const themes: { [key: string]: Theme } = {
  light: webLightTheme,
  dark: webDarkTheme,
};

// ThemeDecorator to wrap stories
export const ThemeDecorator: Decorator = (Story, context) => {
  // Get the current theme from Storybook context
  const themeName = context.globals.theme || 'light';
  const theme = themes[themeName] || webLightTheme;

  return (
    <FluentProvider theme={theme}>
      <Story />
    </FluentProvider>
  );
};
