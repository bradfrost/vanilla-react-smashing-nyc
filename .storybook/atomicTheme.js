import { create } from "@storybook/theming";
import atomLogo from './atom.svg';

export default create({
  base: "light",

  colorSecondary: "#333333",

  // UI
  appBg: "white",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#000000",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barSelectedColor: "#000000",

  // Form colors
  inputBg: "#ffffff",
  inputTextColor: "#000000",
  inputBorderRadius: 4,

  brandTitle: "Vanilla React",
  brandUrl: "/",
  brandImage: atomLogo
});