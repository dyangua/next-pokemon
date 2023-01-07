import { Grid } from "@nextui-org/react";
import { PokemonGrid } from "../../pages";
import PokemonCard from "./PokemonCard";

const PokemonsGrid = ({ pokemons }: { pokemons: PokemonGrid[] }) => {
  return (
    <Grid.Container css={{ padding: 24 }}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};

export default PokemonsGrid;
