import styled from 'styled-components';
import { ThemeType, Theme } from '../../themeContext/themes';

export const InputStyled = styled.input<{
  themeType: ThemeType;
  theme: Theme;
}>`
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText};
  &::placeholder: {
    color: #ffffff;
  }
`;
