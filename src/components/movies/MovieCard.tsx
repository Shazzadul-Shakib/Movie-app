import { CalendarFold, Clapperboard, Flame, Heart } from "lucide-react";
import { Movie } from "@/utils/types";
import { Link } from "react-router-dom";
import { useState } from "react";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [bookmark, setBookmark] = useState(false);
  const { title, genreNames, release_date } = movie;

  return (
    <div className="w-[200px]">
      <div className="relative h-[250px] overflow-hidden">
        <Link to={`/movies/${movie.id}`} state={{ movie }} className="block">
          <div className="relative rounded-lg p-0">
            <img
              className="w-full rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Movie poster"
            />
          </div>
        </Link>
        <div
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from propagating to the parent link
            setBookmark((prev) => !prev);
          }}
          className="absolute right-2 top-2 z-10 cursor-pointer"
        >
          <Heart size={22} color={bookmark ? "red" : "#13C9D4"} />
        </div>
      </div>
      <Link
        to={`/movies/${movie.id}`}
        state={{ movie }}
        className="my-2 block text-white"
      >
        <h1 className="my-1 flex items-center gap-3">
          <Clapperboard size={16} />{" "}
          {title.length > 15 ? title.slice(0, 15) + "..." : title}
        </h1>
        <div className="flex items-center gap-6 text-xs">
          <p className="flex items-center gap-2">
            {" "}
            <Flame size={12} /> {genreNames[0]}
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <CalendarFold size={12} /> {release_date}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
