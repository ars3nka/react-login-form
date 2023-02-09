import styled from 'styled-components';
import { Theme, ThemeType } from '../../../themeContext/themes';

export const PostItemStyled = styled.div<{
  themeType: ThemeType;
  theme: Theme;
}>`
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText};
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 20px;
`;
