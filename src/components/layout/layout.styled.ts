import styled from 'styled-components';
import { ThemeType, Theme } from '../../themeContext/themes';

export const WrapperStyled = styled.div<{
  themeType: ThemeType;
  theme: Theme;
}>`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
`;
