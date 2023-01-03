import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getDetail = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
    };
    getDetail();
  }, []);

  // console.log(movie);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h1>{movie.title}</h1>
          <p style={{ marginTop: "1.5rem" }}>개봉연도: {movie.year}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
