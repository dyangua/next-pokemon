import { FC } from "react";
import Head from "next/head";
import NavbarUI from "../ui/NavbarUI";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout: FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle || "Pokemon app"}</title>
        <meta name="author" content="Daniel" />
        <meta name="description" content="Information about [pokemon]" />
        <meta name="keywords" content="[pokemon name]" />
        <meta property="og:title" content={`Pokemon ${pageTitle} `} />
        <meta property="og:description" content="Pokemo web site" />
        <meta
          property="og:image"
          content="https://cdn.custom-cursor.com/collections/129/cover-pokemon-preview.png"
        />
      </Head>

      <NavbarUI />

      <main>{children}</main>
    </>
  );
};

export default Layout;
