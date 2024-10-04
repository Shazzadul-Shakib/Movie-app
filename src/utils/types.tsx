export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string | null;
  release_date: string;
  genreNames: string[];
};
export type NavbarProps = {
  setSearchTerm: (term: string) => void;
};

export type FilterBarProps = {
  selectedFilter: string | null;
  setSelectedFilter: (filter: string | null) => void;
};

export type SortingBarProps = {
  sortOrder: "newest" | "oldest";
  setSortOrder: (order: "newest" | "oldest") => void;
};

