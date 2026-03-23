import { useRef, useState } from "react";
import { getGifsbyQuery } from "../Actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interfaces";

//const gisfCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  ///////////////////////////////////////////////////////////////////////////
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  ///////////////////////////////////////////////////////////////////////////
  const gisfCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    gisfCache.current;
    if (gisfCache.current[term]) {
      setGifs(gisfCache.current[term]);
      return;
    }

    const gifs = await getGifsbyQuery(term);
    setGifs(gifs);
  };
  ///////////////////////////////////////////////////////////////////////////

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) {
      return;
    }

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifsbyQuery(query);
    setGifs(gifs);

    gisfCache.current[query] = gifs;
    console.log(gisfCache);
  };
  ///////////////////////////////////////////////////////////////////////////

  return {
    gifs,
    handleSearch,
    previousTerms,
    handleTermClicked,
  };
};
