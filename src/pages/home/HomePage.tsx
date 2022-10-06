import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetPokemonsQuery } from "../../app/services/api/pokemonApi";
import { Pokemon } from "../../app/services/api/types";
import withAuthGuard from "../../components/auth/withAuthGuard";
import PokemonCards from "../../components/cards/PokemonCards";
import SearchBarInput from "../../components/input/SearchBarInput";
import FetchingPokemonListSkeleton from "../../components/skeleton/FetchingPokemonListSkeleton";

const HomePage: React.FC = () => {
  const { data, isLoading } = useGetPokemonsQuery();
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setPokemons(data);
    }
  }, [data]);

  function searchPokemon() {}

  return (
    <Container>
      <Typography variant="h1" textAlign={"center"}>
        Liste pokémons
      </Typography>
      <SearchBarInput label="Chercher un pokemon" />
      <Grid container spacing={2} sx={{ marginLeft: 10 }}>
        {isLoading ? (
          <FetchingPokemonListSkeleton />
        ) : (
          pokemons?.map((pokemon) => (
            <Grid item key={pokemon.id}>
              <PokemonCards
                name={pokemon.name}
                picture={pokemon.picture}
                types={pokemon.types}
                createdAt={new Date(pokemon.created)}
                onClick={() => navigate(`/pokemon/${pokemon.id}`)}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default withAuthGuard(HomePage);
