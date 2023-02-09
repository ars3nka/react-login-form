import { useState, useEffect } from 'react';

import { CircularProgress } from '@mui/material';
import { PostItem } from './post-item/post-item';

import './posts-page.css';

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostsPage = () => {
  const [posts, setPosts] = useState<Array<PostType>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="posts-page">
      <h1>Posts</h1>

      {isLoading && <CircularProgress />}
      {posts.length > 0 && (
        <div>
          {posts.map((post) => (
            <PostItem key={post.id} info={post} />
          ))}
        </div>
      )}
    </div>
  );
};
