import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from '../../pages/posts-page/posts-page';

export type InitialStateType = {
  posts: Array<PostType>;
};

export type AddPostsType = Array<PostType>;

export type EditTitleType = {
  value: string;
  id: number;
};

const initialState: InitialStateType = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<AddPostsType>) => {
      state.posts = action.payload;
    },
    editTitle: (state, action: PayloadAction<EditTitleType>) => {
      const index = state.posts.findIndex(
        (post) => post.id == action.payload.id
      );
      state.posts[index].title = action.payload.value;
    },
  },
});

export const { editTitle, addPosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
