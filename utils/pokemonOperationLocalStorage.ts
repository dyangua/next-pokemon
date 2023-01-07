import { PokemonGrid } from "../pages";
import { Pokemon } from "../pages/pokemon/[id]";
import { getFromLocalStorage, saveOnLocalStorage } from "./localstorage";
import { getPokemonImage } from "./pokemonImages";

const POKEMON_KEY_ITEM = "favoritesPokemons";

export const savePokemon = (pokemon: Pokemon) => {
  const { id, name } = pokemon;
  const newPokemon = {
    id,
    name,
    image: getPokemonImage(id),
  };
  const favoritesPokemons = [...getPokemons(), newPokemon];
  saveOnLocalStorage(POKEMON_KEY_ITEM, JSON.stringify(favoritesPokemons));
};

export const getPokemons = (): PokemonGrid[] =>
  JSON.parse(getFromLocalStorage(POKEMON_KEY_ITEM));

export const verifyPokemonIsFavorite = (id: number | string) => {
  if (typeof window === "undefined") return false;

  const pokemons = getPokemons() || [];
  const pokemon = pokemons.find((pokemon: PokemonGrid) => pokemon.id === id);
  return pokemon ? true : false;
};

export const removePokemon = (id: string) => {
  const favoritesPokemons = getPokemons().filter(
    (pokemon: PokemonGrid) => +pokemon.id !== +id
  );
  saveOnLocalStorage(POKEMON_KEY_ITEM, JSON.stringify(favoritesPokemons));
};

export const togglePokemon = (pokemon: Pokemon) => {
  const { id } = pokemon;
  if (!verifyPokemonIsFavorite(id)) {
    savePokemon(pokemon);
  } else {
    removePokemon(id);
  }
};
