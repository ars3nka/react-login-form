import styled from 'styled-components';
import { ThemeType, Theme } from '../../themeContext/themes';

export const FormStyled = styled.div<{ themeType: ThemeType; theme: Theme }>`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;
