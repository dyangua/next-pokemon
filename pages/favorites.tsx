import { Row, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { PokemonGrid } from ".";
import PokemonsGrid from "../components/app/PokemonsGrid";
import Layout from "../components/layouts/Layout";
import { getPokemons } from "../utils/pokemonOperationLocalStorage";

const EmptyPokemons = () => {
  return (
    <Row justify="center" css={{ marginTop: 36 }}>
      <Text h2>Not pokemons</Text>
    </Row>
  );
};

const FavoritesPage = () => {
  const [pokemons, setPokemons] = useState<PokemonGrid[]>([]);

  useEffect(() => {
    setPokemons(getPokemons());
  }, []);

  return (
    <Layout pageTitle="Favorites Pokemons">
      {pokemons.length === 0 ? (
        <EmptyPokemons />
      ) : (
        <PokemonsGrid pokemons={pokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
