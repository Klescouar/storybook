export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Card",
        "Header",
        "Avatar",
        "Socials",
        "Social",
        "Buttons",
        "Button",
        "Shares",
        "Share",
      ],
    },
  },
};
