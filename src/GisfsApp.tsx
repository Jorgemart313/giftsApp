//import React from 'react'

import { useState } from "react";
import { Giflist } from "./gifs/Giflist";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { Customheader } from "./shared/components/Customheader";
import SearchBar from "./shared/components/SearchBar";

export const GisfsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["jorge"]);

  const handleTermClicked = (term: string) => {
    console.log([term]);
  };

  const handleSearch = (query: string) => {
    console.log({ query });
  };

  return (
    <>
      {/* {header} */}
      <Customheader
        title="Mis Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* {Search} */}

      {/* {searchbar} */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      {/* {Busquedas previas} */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* {Gifs} */}
      {/* {Giflist} */}

      <Giflist gifs={mockGifs} />
    </>
  );
};
