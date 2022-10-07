import React from "react";
import { usePutPokemonsMutation } from "../../app/services/api/pokemonApi";
import PokemonFormCards from "../cards/PokemonFormCards";
import { useNavigate } from "react-router-dom";
import { useGetDetailPokemon } from "../../app/services/hooks/useGetDetailPokemon";

export default function withUpdateForm(
  PokemonForm: typeof PokemonFormCards,
  pokemonId: string
) {
  return () => {
    const { pokemon: data } = useGetDetailPokemon(pokemonId);
    const [updatePokemon] = usePutPokemonsMutation();
    const navigate = useNavigate();

    return (
      <>
        {data && (
          <PokemonForm
            {...data}
            submit={async (name, picture, hp, cp, types) => {
              await updatePokemon({
                id: parseInt(pokemonId),
                name,
                picture,
                hp,
                cp,
                types,
              }).unwrap();
              navigate("/");
            }}
          />
        )}
      </>
    );
  };
}
