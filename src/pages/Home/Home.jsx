import { useState, useEffect } from "react";

import { fetchTrending } from 'services/fetch';
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { Title } from './Home.styled';


function TrendingMovies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async function addMovies() {
      try {
          const fetchedTrends = await fetchTrending(1);
          // console.log(fetchedTrends);
          setMovies([...fetchedTrends.results]);
      } catch (error) {
      
        console.log(error.response.data)
      }
    })();
    }, [])

    return (
      <>
        <Title>Trending this week</Title>
        <MoviesList movies={movies} />
      </>
       
    )
}

export default TrendingMovies;