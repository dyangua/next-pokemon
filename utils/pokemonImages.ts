import { Sprites } from "../pages/pokemon/[id]";

export const getPokemonImage = (id: number | string) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
};

export const sanitizeImagesFromSprites = (sprites: Sprites): string[] => {
  const pokemonSprites: Sprites = sprites;
  const images: string[] = [];
  Object.keys(pokemonSprites).forEach((key) => {
    if (pokemonSprites[key] && typeof pokemonSprites[key] === "string") {
      images.push(pokemonSprites[key]);
    }
  });

  return images;
};
