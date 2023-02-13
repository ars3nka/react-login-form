import styled from 'styled-components';
import { ThemeType, Theme } from '../../themeContext/themes';

export const ButtonStyled = styled.button<{
  themeType: ThemeType;
  theme: Theme;
}>`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  font-family: 'Lexend Deca';
  transition: 0.2s linear all;
  &:hover {
    color: #fff;
    background-color: #093545;
  }
`;
