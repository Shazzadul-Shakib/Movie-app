import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "@/api/getMovies";
import FilterBar from "@/components/filter/FilterBar";
import SortingBar from "@/components/filter/SortingBar";
import MovieCard from "@/components/movies/MovieCard";
import { Movie } from "@/utils/types";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { searchTerm } = useOutletContext<{ searchTerm: string }>();

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies();
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  // Filter movies based on the search term
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="my-4 px-4 sm:px-[40px] lg:px-24">
      <div className="flex items-center justify-end gap-4 pb-6">
        <SortingBar />
        <FilterBar />
      </div>
      <div className="hide-scrollbar h-[calc(100dvh-160px)] w-full overflow-y-auto px-[20px]">
        {filteredMovies.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-lg text-white">No movies found!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
