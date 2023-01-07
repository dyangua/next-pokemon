import { Card, Grid } from "@nextui-org/react";

type PokemonImageProps = {
  image: string;
  name: string;
};

const PokemonImage = ({ image, name }: PokemonImageProps) => {
  return (
    <Grid css={{ margin: 16 }} xs={12} md={5}>
      <Card>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={image}
            objectFit="contain"
            width="100%"
            height={120}
            alt={name}
          />
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default PokemonImage;
