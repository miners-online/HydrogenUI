export const decorators = [
  (Story) => {
    const storyElement = Story();
    const wrapper = document.createElement('div');
    wrapper.dataset.theme = "light";
    wrapper.innerHTML = storyElement.outerHTML;
    return wrapper;
  },
];

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
