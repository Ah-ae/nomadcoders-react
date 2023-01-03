import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt={`Image of ${title}`} />
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  coverImg: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  propTypes: propTypes.arrayOf(propTypes.string),
};

export default Movie;
