import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const api_key = '2402629cc235e448b11efcecffc11c17';
const params = {
    trending: 'trending/movie/week',
    movieID: 'movie/',
    search: 'search/movie',
    credits: '/credits',
    reviews: '/reviews'
}

export async function fetchTrending() {
    const response = await axios.get(`/${params.trending}?api_key=${api_key}`);
  return response.data;
  };



export async function fetchMovieByID(id) {

  const response = await axios.get(
    `/movie/${id}?api_key=${api_key}&language=en-US`
  );
  return response.data;
}


export async function fetchMoviesByQuery(query) {
  const response = await axios.get(
    `/${params.search}?api_key=${api_key}&query=${query}&language=en-US&include_adult=false`
  );
  return response.data;
}


export async function fetchCast(id) {
  const response = await axios.get(
    `/${params.movieID}${id}${params.credits}?api_key=${api_key}&language=en-US`
  );
  return response.data;
}



export async function fetchReviews(id) {
  const response = await axios.get(
    `/${params.movieID}${id}${params.reviews}?api_key=${api_key}&language=en-US`
  );
  return response.data;
}