enum Color {
  WHITE = '#ffffff',
  WHITE_BACKGROUND = '#e5e5e5',
  LIGHT_GREEN = '#20df7f',
  DARK_BLUE = '#224957',
  DARK_BLUE_LIGHTER = '#006400',
  DARK_BLUE_BACKGROUND = '#093545',
}

export type ThemeType = 'dark' | 'light';

export interface Theme {
  background: Color;
  text: Color;
  inputBackground: Color;
  inputText: Color;
  buttonBackground: Color;
  buttonText: Color;
}

export const Themes: Record<ThemeType, Theme> = {
  light: {
    background: Color.WHITE_BACKGROUND,
    text: Color.DARK_BLUE,
    inputBackground: Color.DARK_BLUE,
    inputText: Color.WHITE,
    buttonBackground: Color.DARK_BLUE,
    buttonText: Color.WHITE,
  },
  dark: {
    background: Color.DARK_BLUE_BACKGROUND,
    text: Color.WHITE,
    inputBackground: Color.LIGHT_GREEN,
    inputText: Color.WHITE,
    buttonBackground: Color.LIGHT_GREEN,
    buttonText: Color.DARK_BLUE,
  },
};
