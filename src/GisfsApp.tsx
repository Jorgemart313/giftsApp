//import React from 'react'

import { useState } from "react";
import { Giflist } from "./gifs/Giflist";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { Customheader } from "./shared/components/Customheader";
import SearchBar from "./shared/components/SearchBar";
import { getGifsbyQuery } from "./gifs/Actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interfaces";

export const GisfsApp = () => {
  const [gifs, setgifs] = useState<Gif[]>([]);

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log([term]);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) {
      return;
    }

    // const currentTerms = previousTerms.slice(0,6);

    // currentTerms.unshift(query)

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifsbyQuery(query);
    setgifs(gifs);
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

      <Giflist gifs={gifs} />
    </>
  );
};
