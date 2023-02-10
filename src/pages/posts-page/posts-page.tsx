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

  return (
    <div className="posts-page">
      <h1>Posts</h1>
      {posts.length > 0 && (
        <div>
          {posts.map((post: PostType) => (
            <PostItem key={post.id} info={post} />
          ))}
        </div>
      )}
    </div>
  );
};
