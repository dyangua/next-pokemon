import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import pokeAPI from "../api/pokeApi";
import Layout from "../components/layouts/Layout";
import { PokemonListItem, PokemonResponse } from "../interfaces/pokemon";
import { Grid } from "@nextui-org/react";
import PokemonCard from "../components/app/PokemonCard";
import { getPokemonImage } from "../utils/pokemonImages";
import PokemonsGrid from "../components/app/PokemonsGrid";

type HomePageProps = {
  pokemons: PokemonListItem[];
};

export type PokemonGrid = {
  id: string;
  name: string;
  image: string;
};

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <Layout pageTitle="Pokemon list">
      <Grid.Container css={{ padding: 24 }}>
        <PokemonsGrid pokemons={pokemons} />
      </Grid.Container>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeAPI.get<PokemonResponse>("/pokemon?limit=10");

  const addImages = data.results.map((pokemon, id) => {
    const pokemonId = id + 1;
    return {
      ...pokemon,
      id: pokemonId,
      image: getPokemonImage(pokemonId),
    };
  });

  return {
    props: {
      pokemons: addImages,
    },
  };
};
