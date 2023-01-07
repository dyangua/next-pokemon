export interface PokemonListItem {
  name: string;
  id: string;
  image: string;
}

export interface PokemonResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonListItem[];
}
