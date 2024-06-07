import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { Title, Year, Poster } = movie; // Adjust property names to match API response
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img className="card-img" src={Poster} alt="movie-card" />
      </div>
      <div className="card-details">
        <div>
          <span className="title">{Title}</span>
        </div>
        <div>
          <span className="year">Year: {Year}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
