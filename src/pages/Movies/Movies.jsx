import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MoviesList } from "components/MoviesList/MoviesList";
import { fetchMoviesByQuery } from "services/fetch";
import { SearchBox } from "../../components/Searchbox/Searchbox";


 const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [moviesList, setMoviesList] = useState([]);
  const page = Number(searchParams.get('page') ?? 1);

   const formSubmitHandler = e => {  
     e.preventDefault();
     
    const searchForm = e.currentTarget.elements.query.value;
      if (searchForm === '') {
        toast.error('Please fill me ^.~');
        return;
      }
      if (searchParams.get('query') === searchForm) {
        toast.error("You're repeating yourself.");
        return;
      }

    
      
    setSearchParams(searchForm !== '' ? { query: searchForm} : '');
    setMoviesList([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    (async function addMoviesListByQuery() {
      try {
        const data = await fetchMoviesByQuery(query, page);
        if (page > 1) {
          setMoviesList(prevMoviesList => [...prevMoviesList, ...data.results]);
        }
        if (data.results.length === 0) {
          toast.error('Write properly');
          return;
        }
        setMoviesList([...data.results]);
        setSearchParams({ query: query, page: page });
    } catch (error) {
        console.log(error.response.data);
      }
    })();

  }, [query, page, setSearchParams]);

  return (
    
    <main>
      <SearchBox value={query} onSubmit={formSubmitHandler} />
      {moviesList && <MoviesList movies={moviesList} />}
      <ToastContainer autoClose={2000}
            position="top-left" />
    </main>
  );
 };

export default Movies;