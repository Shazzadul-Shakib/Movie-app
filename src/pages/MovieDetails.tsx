import { Badge } from "@/components/ui/badge";
import imdb from "../assets/imdb.png";
import { ChevronDown, CircleChevronLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = location.state?.movie;

  return (
    <div>
      <div className="my-4 flex w-full items-center justify-end pr-6 md:my-8 md:pr-[80px]">
        <CircleChevronLeft
          onClick={() => navigate("/")}
          className="hidden cursor-pointer md:block"
          size={35}
          color="white"
        />
        <CircleChevronLeft
          onClick={() => navigate("/")}
          className="block md:hidden"
          size={25}
          color="white"
        />
      </div>
      <div className="my-6 grid grid-cols-1 justify-items-center gap-y-10 px-4 sm:px-[40px] md:my-14 lg:grid-cols-3 lg:justify-items-start lg:px-24">
        {/* Poster section */}
        <div className="w-[300px] overflow-hidden rounded-lg shadow-lg shadow-primary">
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="poster"
          />
        </div>
        {/* Details section */}
        <div className="col-span-2 mx-5">
          {/* Name section */}
          <div className="mb-10">
            <h1 className="text-5xl font-bold text-white">{movie.title}</h1>
          </div>
          {/* Others details */}
          <div>
            {/* Badge section - genre */}
            <div className="mt-10 flex items-center gap-4">
              {movie.genreNames.map((genre: string) => (
                <Badge key={genre} className="px-6 py-1 text-white" variant="outline">
                  {genre}
                </Badge>
              ))}
            </div>

            {/* Details section */}
            <div className="my-10">
              <p className="text-balance text-sm text-white">
                {movie.overview}
              </p>
              <div className="flex items-center gap-10">
                <Button className="my-8 flex items-center gap-2 bg-primary hover:bg-white hover:text-primary">
                  {" "}
                  Read more <ChevronDown size={22} className="-mb-[3px]" />
                </Button>
                {/* Small details */}
                <div className="mx-2 my-4 flex items-center gap-10">
                  <div className="flex items-center gap-3">
                    <img src={imdb} alt="imdb" className="h-4 rounded-sm" />
                    <p className="text-xs text-white">
                      {movie.vote_average.toFixed(1)} / 10
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame size={16} color="white" />
                    <p className="text-xs text-white">{movie.popularity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
