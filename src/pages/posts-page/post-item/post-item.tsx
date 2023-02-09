import { FC } from 'react';
import { useTheme } from '../../../themeContext';
import { PostType } from '../posts-page';
import { PostItemStyled } from './post-item.styled';

interface PostItemProps {
  info: PostType;
}

export const PostItem: FC<PostItemProps> = ({ info }) => {
  const { theme, themeType } = useTheme();
  return (
    <PostItemStyled themeType={themeType} theme={theme}>
      <h3>{info.title}</h3>
      <p>{info.body}</p>
    </PostItemStyled>
  );
};
