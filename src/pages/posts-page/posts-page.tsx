import { useState } from 'react';
import { useAppSelector } from '../../redux/store';
import { PostItem } from './post-item/post-item';

import './posts-page.css';

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostsPage = () => {
  const posts = useAppSelector((state) => state.posts.posts);

  const [value, setValue] = useState('all');
  const [filtedPosts, setFilteredPosts] = useState(posts);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(event.target.value);
    switch (event.target.value) {
      case 'all':
        setFilteredPosts(posts);
        break;
      case 'even':
        setFilteredPosts(posts.filter((post) => post.userId % 2 === 0));
        break;
      case 'odd':
        setFilteredPosts(posts.filter((post) => post.userId % 2 !== 0));
        break;
    }
  };

  return (
    <div className="posts-page">
      <div className="posts-header">
        <h1>Posts</h1>{' '}
        <select
          className="posts-sort"
          value={value}
          onChange={(e) => handleChange(e)}
        >
          <option value="all">All</option>
          <option value="even">Even</option>
          <option value="odd">Odd</option>
        </select>
      </div>

      {filtedPosts.length > 0 && (
        <div>
          {filtedPosts.map((post: PostType) => (
            <PostItem key={post.id} info={post} />
          ))}
        </div>
      )}
    </div>
  );
};
