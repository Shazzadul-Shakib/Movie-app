import { CalendarFold, Clapperboard, Flame } from "lucide-react";
import { Movie } from "@/utils/types";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const { title, genreNames, release_date } = movie;
  
  return (
    <div className="w-[200px] cursor-pointer">
      <div className="h-[250px] overflow-hidden">
        <div className="rounded-lg p-0">
          <img
            className="w-full rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Movie poster"
          />
        </div>
      </div>
      <div className="my-2 text-white">
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
      </div>
    </div>
  );
};

export default MovieCard;
