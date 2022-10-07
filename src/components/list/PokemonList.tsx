import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../app/services/api/types";
import PokemonCards from "../cards/PokemonCards";

const PokemonList: React.FC<{
  pokemons: Pokemon[] | undefined;
}> = ({ pokemons }) => {
  const navigate = useNavigate();

  return (
    <>
      {pokemons?.map((pokemon) => (
        <Grid item key={pokemon.id}>
          <PokemonCards
            name={pokemon.name}
            picture={pokemon.picture}
            types={pokemon.types}
            createdAt={new Date(pokemon.created)}
            onClick={() => navigate(`/pokemon/${pokemon.id}`)}
          />
        </Grid>
      ))}
    </>
  );
};

export default PokemonList;
