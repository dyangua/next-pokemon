import pokeAPI from "../api/pokeApi";

export const getPokemonAPI = async (id: string) => {
  try {
    const { data } = await pokeAPI.get(`/pokemon/${id}`);

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};
