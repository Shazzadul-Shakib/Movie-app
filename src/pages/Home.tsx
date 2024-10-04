import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "@/api/getMovies";
import FilterBar from "@/components/filter/FilterBar";
import SortingBar from "@/components/filter/SortingBar";
import MovieCard from "@/components/movies/MovieCard";
import { Movie } from "@/utils/types";
import Loader from "@/components/loader/Loader";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { searchTerm } = useOutletContext<{ searchTerm: string }>();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // Fetch data with useEffect and set loading state during the fetch
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const moviesData = await getMovies();
      setMovies(moviesData);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  // Filter movies based on both the search term and the selected filter
  const filteredMovies = movies.filter((movie) => {
    const matchesSearchTerm = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesSelectedFilter =
      !selectedFilter ||
      movie.genreNames.some((genre) =>
        genre.toLowerCase().includes(selectedFilter.toLowerCase()),
      );

    return matchesSearchTerm && matchesSelectedFilter;
  });

  // Sort movies based on the sortOrder (newest to oldest or oldest to newest)
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOrder === "newest") {
      return (
        new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      );
    } else {
      return (
        new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
      );
    }
  });

  return (
    <div className="my-4 px-4 sm:px-[40px] lg:px-24">
      <div className="flex items-center justify-end gap-4 pb-6">
        <SortingBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <FilterBar
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
      <div className="hide-scrollbar h-[calc(100dvh-160px)] w-full overflow-y-auto px-[20px]">
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <Loader />
          </div>
        ) : sortedMovies.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-lg text-primary font-bold">No movies found!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {sortedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
