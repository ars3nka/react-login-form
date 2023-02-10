import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../themeContext';
import { PostType } from '../posts-page';
import { PostItemStyled } from './post-item.styled';

interface PostItemProps {
  info: PostType;
}

export const PostItem: FC<PostItemProps> = ({ info }) => {
  const { theme, themeType } = useTheme();
  return (
    <Link to={`/posts/${info.id}`}>
      <PostItemStyled themeType={themeType} theme={theme}>
        <h3>{info.title}</h3>
        <p>{info.body}</p>
      </PostItemStyled>
    </Link>
  );
};
