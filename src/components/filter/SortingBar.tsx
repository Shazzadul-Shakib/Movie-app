import { FC } from "react";
import { ListFilter } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SortingBarProps } from "@/utils/types";

const SortingBar: FC<SortingBarProps> = ({ sortOrder, setSortOrder }) => {
  const handleSortChange = (order: "newest" | "oldest") => {
    setSortOrder(order);
  };

  return (
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
        <DropdownMenuCheckboxItem
          checked={sortOrder === "newest"}
          onCheckedChange={() => handleSortChange("newest")}
        >
          Newest to oldest
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={sortOrder === "oldest"}
          onCheckedChange={() => handleSortChange("oldest")}
        >
          Oldest to newest
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortingBar;
