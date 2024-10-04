import { FC } from "react";
import { ArrowDownAz } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FilterBarProps } from "@/utils/types";

const genres = [
  "Action",
  "Drama",
  "Comedy",
  "Animation",
  "Crime",
  "Family",
  "Science",
  "Horror",
  "Romance",
  "Mystery",
];

const FilterBar: FC<FilterBarProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => {
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-7 gap-2">
            <ArrowDownAz className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Filter
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filter by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {genres.map((genre) => (
            <DropdownMenuCheckboxItem
              key={genre}
              checked={selectedFilter === genre}
              onCheckedChange={() => handleFilterChange(genre)}
            >
              {genre}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterBar;
