import {colors} from './colors';
import {
  font_size,
  screen_size,
  icon_size,
  border_radius,
  spacing,
} from './dimensions';

type ThemeConfig = {
  background: string;
  foreground: string;
  text: string;
};

const light: ThemeConfig = {
  background: colors.white,
  foreground: colors.white,
  text: colors.black,
};

const dark: ThemeConfig = {
  background: colors.black,
  foreground: colors.black,
  text: colors.white,
};

export const themes = {
  light,
  dark,
};

export const tokens = {
  colors: {
    ...colors,
  },
  font_size: {
    ...font_size,
  },
  screen_size: {
    ...screen_size,
  },
  spacing: {
    ...spacing,
  },
  icon_size: {
    ...icon_size,
  },
  border_radius: {
    ...border_radius,
  },
};

export function themeConfig(mode: ThemeConfig) {
  return {
    ...tokens,
    ...mode,
  };
}
