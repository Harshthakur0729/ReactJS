import { useLocation } from 'react-router-dom';
import '../App.css'; 
const CardDetails = () => {
  const location = useLocation();
  const details = location.state.key || {};
  console.log(details);

  if (!details) {
    return <p>No details found.</p>;
  }

  const { id, name, img_url, rating, description, cast, genre, watch_url } = details;

  return (
    <div id='card-details'>
<h1>{myname}</h1>
      <h1>{name}</h1>
      <img id='image' src={img_url} alt={name} />
      <div id='card-details-content'>
        <h3>Rating: {rating}</h3>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Cast:</strong> {cast.join(', ')}</p>
        <p><strong>Genre:</strong> {genre.join(', ')}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
};

export default CardDetails;
