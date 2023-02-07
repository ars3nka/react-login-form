import styled from 'styled-components';
import { ThemeType, Theme } from '../../themeContext/themes';

export const ButtonStyled = styled.button<{
  themeType: ThemeType;
  theme: Theme;
}>`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
`;
