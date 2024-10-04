export type Genre= {
  id: number;
  name: string;
}

export type Movie= {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string | null;
  release_date: string;
  genreNames: string[];
}