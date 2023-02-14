import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FormButton } from '../../../components/form-button/form-button';
import { CircularProgress } from '@mui/material';
import { useAppSelector } from '../../../redux/store';

import './post-page.css';
import { PostType } from '../posts-page';

export const PostPage = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [post, setPost] = useState<PostType>();

  const posts = useAppSelector((state) => state.posts.posts);

  const findPost = () => {
    setIsLoading(true);
    const post = posts.filter((post) => post.id === Number(params.id));
    setPost(post[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    findPost();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="post-page">
      <h1>Post {params.id}</h1>
      <h3>Title: {post?.title}</h3>
      <p>{post?.body}</p>
      <Link to={`/posts/${params.id}/edit`}>
        <FormButton type="button" text="Edit" className="edit-button" />
      </Link>
    </div>
  );
};
