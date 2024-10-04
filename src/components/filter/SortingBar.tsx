import { ListFilter } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SortingBarProps } from "@/utils/types";

const SortingBar = ({ sortOrder, setSortOrder }: SortingBarProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-7 gap-2">
            <ListFilter className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Sort
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Sort by release year</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={sortOrder}
            onValueChange={(value) =>
              setSortOrder(value as "newest" | "oldest")
            }
          >
            <DropdownMenuRadioItem value="newest">
              Newest to oldest
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="oldest">
              Oldest to newest
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortingBar;
