import { Giflist } from "./gifs/Giflist";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { Customheader } from "./shared/components/Customheader";
import SearchBar from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GisfsApp = () => {
  const { gifs, handleSearch, handleTermClicked, previousTerms } = useGifs();

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
