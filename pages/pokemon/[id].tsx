import { Button, Container, Grid, Row, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useMemo, useState } from "react";
import pokeAPI from "../../api/pokeApi";
import PokemonImage from "../../components/app/PokemonImage";
import Layout from "../../components/layouts/Layout";
import { sanitizeImagesFromSprites } from "../../utils/pokemonImages";
import {
  togglePokemon,
  verifyPokemonIsFavorite,
} from "../../utils/pokemonOperationLocalStorage";

export type Sprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  [key: string]: string;
};

export type Pokemon = {
  name: string;
  sprites: Sprites;
  id: string;
};

type PokemonDetailPagePros = {
  pokemon: Pokemon;
};

const PokemonDetailPage = ({ pokemon }: PokemonDetailPagePros) => {
  const { name, sprites, id } = pokemon;
  const [isFavorite, setIsFavorite] = useState(verifyPokemonIsFavorite(id));

  const pokemonImages = useMemo(
    () => sanitizeImagesFromSprites(sprites),
    [sprites]
  );

  const onTogglePokemon = () => {
    togglePokemon(pokemon);
    setIsFavorite(!isFavorite);
  };

  return (
    <Layout pageTitle={name}>
      <Container css={{ marginTop: 24 }}>
        <Row wrap="wrap" justify="space-between" align="center">
          <Text b>{pokemon.name}</Text>
          <Button
            onPress={onTogglePokemon}
            color={isFavorite ? "secondary" : "primary"}
          >
            {isFavorite ? "Remove from favorites" : " Save to favorites"}
          </Button>
        </Row>

        <Grid.Container css={{ padding: 24 }}>
          {pokemonImages.map((image) => (
            <PokemonImage key={image} image={image} name={name} />
          ))}
        </Grid.Container>
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const emptyArray = new Array(10).fill(0);
  const pokemonIds = emptyArray.map((_, index) => ({
    params: { id: `${index + 1}` },
  }));

  return {
    paths: pokemonIds,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = ctx.params;
  const { data } = await pokeAPI.get(`/pokemon/${params?.id}`);
  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonDetailPage;
