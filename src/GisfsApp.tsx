//import React from 'react'

import { Giflist } from "./gifs/Giflist";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { Customheader } from "./shared/components/Customheader";
import SearchBar from "./shared/components/SearchBar";

export const GisfsApp = () => {
  return (
    <>
      {/* {header} */}
      <Customheader
        title="Mis Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* {Search} */}

      {/* {searchbar} */}
      <SearchBar placeholder="Busca lo que quieras" />

      {/* {Busquedas previas} */}
      <PreviousSearches />

      {/* {Gifs} */}
      {/* {Giflist} */}

      <Giflist gifs={mockGifs} />
    </>
  );
};
