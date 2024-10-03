import { CalendarFold, Clapperboard, Flame } from "lucide-react";
import poster from "../../assets/poster.jpg";

const MovieCard = () => {
  return (
    <div className="w-[200px] cursor-pointer">
      <div className="h-[250px] overflow-hidden">
        <div className="rounded-lg p-0">
          <img className="w-full rounded-lg" src={poster} alt="Movie poster" />
        </div>
      </div>
      <div className="my-2 text-white">
        <h1 className="my-1 flex items-center gap-4">
          <Clapperboard size={16} /> Blade Runner
        </h1>
        <div className="flex items-center gap-6 text-xs">
          <p className="flex items-center gap-2">
            {" "}
            <Flame size={12} /> Comedy
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <CalendarFold size={12} /> jun 11, 2012
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
