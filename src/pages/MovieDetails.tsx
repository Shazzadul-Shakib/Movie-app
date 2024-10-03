import { Badge } from "@/components/ui/badge";
import poster from "../assets/poster.jpg";
import imdb from "../assets/imdb.png";
import { ChevronDown, Hourglass } from "lucide-react";
import { Button } from "@/components/ui/button";
const MovieDetails = () => {
  return (
    <div className="my-14 grid grid-cols-1 justify-items-center gap-y-10 px-4 sm:px-[40px] lg:grid-cols-3 lg:justify-items-start lg:px-24">
      {/* Poster section */}
      <div className="w-[300px] overflow-hidden rounded-lg shadow-lg shadow-primary">
        <img className="w-full" src={poster} alt="poster" />
      </div>
      {/* Details section */}
      <div className="col-span-2 mx-5">
        {/* Name section */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-white">Blade Runner 2045</h1>
        </div>
        {/* Others details */}
        <div>
          {/* Badge section - genre */}
          <div className="mt-10 flex items-center gap-4">
            <Badge className="px-6 py-1 text-white" variant="outline">
              Thriller
            </Badge>
            <Badge className="px-6 py-1 text-white" variant="outline">
              Action
            </Badge>
            <Badge className="px-6 py-1 text-white" variant="outline">
              Comedy
            </Badge>
            <Badge className="px-6 py-1 text-white" variant="outline">
              Genre
            </Badge>
          </div>

          {/* Details section */}
          <div className="my-10">
            <p className="text-balance text-sm text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nam
              unde culpa asperiores illum saepe, laboriosam quidem facilis ipsam
              ipsa ipsum nostrum veritatis vitae excepturi tenetur, aut nihil
              accusamus est. Suscipit ratione soluta deserunt excepturi eaque
              repellat repellendus minus facilis, ipsam veritatis est,
              blanditiis quod debitis maxime facere nesciunt eligendi!
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
                  <p className="text-xs text-white">7.9 / 10</p>
                </div>
                <div className="flex items-center gap-3">
                  <Hourglass size={16} color="white" />
                  <p className="text-xs text-white">3h 12m</p>
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
