import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FormButton } from '../../../components/form-button/form-button';
import { FormInput } from '../../../components/form-input/form-input';
import { editTitle } from '../../../redux/reducers/postsReducer';

export const PostEditPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEditTitle = (event: any): void => {
    event.preventDefault();
    dispatch(
      editTitle({ value: event.target[0].value, id: Number(params.id) })
    );
    navigate(`/posts/${params.id}`);
  };

  return (
    <div className="post-page">
      <h1>Edit Post {params.id}</h1>
      <p>New title</p>
      <form onSubmit={handleEditTitle}>
        <FormInput type="text" id="edit-title" />
        <FormButton type="submit" text="Edit Title" className="edit-button" />
      </form>
      <FormButton
        type="button"
        text="Go Back"
        className="edit-button"
        onClick={() => navigate('/posts')}
      />
    </div>
  );
};
