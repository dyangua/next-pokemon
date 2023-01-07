import { PokemonListItem } from "../../interfaces/pokemon";
import { Card, Text, Grid, Row, Badge } from "@nextui-org/react";
import NextLink from "next/link";

type PokemonCardProps = {
  pokemon: PokemonListItem;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Grid xs={4}>
      <NextLink href={`/pokemon/${pokemon.id}`} passHref>
        <Card isPressable css={{ margin: 8, minWidth: 200 }}>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={pokemon.image}
              objectFit="fill"
              width="100%"
              height={140}
              alt={pokemon.name}
            />
          </Card.Body>
          <Card.Footer css={{ justifyItems: "flex-start" }}>
            <Row wrap="wrap" justify="space-between" align="center">
              <Text b>{pokemon.name}</Text>
              <Badge color={"primary"}>Full Detail</Badge>
            </Row>
          </Card.Footer>
        </Card>
      </NextLink>
    </Grid>
  );
};

export default PokemonCard;
