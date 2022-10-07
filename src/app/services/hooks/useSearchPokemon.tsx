import React, { useState, useEffect } from "react";
import { useGetPokemonsQuery } from "../api/pokemonApi";
import { Pokemon } from "../api/types";

type UseSearchPokemonHooksType = {
  pokemons: Pokemon[];
  isFetching: boolean;
  run: (query: string) => void;
};

export function useSearchPokemon(): UseSearchPokemonHooksType {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { data, isLoading } = useGetPokemonsQuery();
  const [isFetching, setIsFetching] = useState<boolean>(isLoading);

  useEffect(() => {
    if (data) {
      setPokemons(data);
      setIsFetching(false);
    }
  }, [data]);

  return {
    pokemons,
    isFetching,
    run: (query: string) => {
      setIsFetching(true);
      fetch(`${process.env.REACT_APP_API}/pokemons/search?name=${query}`)
        .then((response) => response.json())
        .then((data) => setPokemons(data))
        .then(() => setIsFetching(false));
    },
  };
}
