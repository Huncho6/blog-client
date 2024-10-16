import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_NEWS } from '../graphql/mutations';

const AddNewsModal = ({ onClose }) => {
    const [newstitle, setNewsTitle] = useState('');
    const [description, setDescription] = useState('');
    const [poster, setPoster] = useState('');
    const [video, setVideo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [createNews] = useMutation(CREATE_NEWS);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await createNews({ variables: { newstitle, description, poster, video } });
        onClose();
      } catch (error) {
        setErrorMessage('Error creating news. Please try again.');
        console.error('Error creating news:', error);
      }
    };
  
    return (
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="News Title"
            value={newstitle}
            onChange={(e) => setNewsTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Poster URL"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
          <input
            type="text"
            placeholder="Video URL"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button type="submit">Add News</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    );
  };
  

export default AddNewsModal;
