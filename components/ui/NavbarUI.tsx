import { Navbar, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const IMAGE_SIZE = 65;

const NavbarUI = () => {
  return (
    <Navbar isBordered variant="static">
      <Link href="/" passHref>
        <Navbar.Brand>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
            alt="logo image"
          />
          <Text b color="inherit">
            Pokemons
          </Text>
        </Navbar.Brand>
      </Link>

      <Navbar.Content>
        <Navbar.Item id="favs">
          <Button bordered auto as={Link} href="/favorites" color="gradient">
            Favorites
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarUI;
