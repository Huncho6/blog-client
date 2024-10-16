import { useQuery, useMutation } from '@apollo/client';
import { GET_NEWS_BY_ID, UPDATE_NEWS, DELETE_NEWS } from '../../graphql/queries'; // Import the queries and mutations
import { useParams, useHistory } from 'react-router-dom';
import { checkIsAdmin } from '../utils/auth';

const NewsDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_NEWS_BY_ID, { variables: { id } });
  const [updateNews] = useMutation(UPDATE_NEWS);
  const [deleteNews] = useMutation(DELETE_NEWS);
  const isAdmin = checkIsAdmin();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading news details.</p>;

  const handleUpdate = async () => {
    try {
      const response = await updateNews({
        variables: {
          id: newsId, // Replace with the appropriate ID
          title: newTitle, // Replace with the updated title
          description: newDescription, // Replace with the updated description
          poster: newPoster, // Replace with the updated poster URL
          video: newVideo // Replace with the updated video URL
        }
      });
  
      console.log('Update successful:', response.data.updateNews);
      // Optionally, show a success message or refresh the news list
    } catch (err) {
      console.error('Error updating news:', err);
      // Optionally, show an error message to the user
    }
  };

  const handleDelete = async () => {
    try {
      await deleteNews({ variables: { id } });
      history.push('/news'); // Redirect after deletion
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  return (
    <div>
      <h2>{data.newsById.title}</h2>
      <p>{data.newsById.description}</p>
      <img src={data.newsById.poster} alt="Poster" />
      <video src={data.newsById.video} controls />
      {isAdmin && (
        <>
          <button onClick={handleUpdate}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default NewsDetails;
