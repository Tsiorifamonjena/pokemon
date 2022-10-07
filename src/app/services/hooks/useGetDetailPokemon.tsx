import { useState, useEffect } from "react";
import { useGetPokemonsQuery } from "../api/pokemonApi";
import { Pokemon } from "../api/types";

type UseGetDetailPokemonHooksType = {
  pokemon: Pokemon | undefined;
  isFetching: boolean;
};

export function useGetDetailPokemon(
  pokemonId?: string
): UseGetDetailPokemonHooksType {
  const { data, isLoading } = useGetPokemonsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => {
      return {
        data: data?.find((pokemon) => pokemon.id?.toString() === pokemonId),
        isLoading,
      };
    },
  });
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isFetching, setIsFetching] = useState<boolean>(isLoading);

  useEffect(() => {
    if (data) {
      setPokemon(data);
      setIsFetching(false);
    }
  }, [data]);

  return { pokemon, isFetching };
}
