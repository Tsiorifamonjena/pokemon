import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useSearchPokemon } from "../../app/services/hooks/useSearchPokemon";
import withAuthGuard from "../../components/auth/withAuthGuard";
import SearchBarInput from "../../components/input/SearchBarInput";
import PokemonList from "../../components/list/PokemonList";
import FetchingPokemonListSkeleton from "../../components/skeleton/FetchingPokemonListSkeleton";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";

const fabStyle = {
  position: "fixed",
  bottom: 16,
  right: 16,
};

const HomePage: React.FC = () => {
  const { pokemons, isFetching, run } = useSearchPokemon();
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h1" textAlign={"center"}>
        Liste pokémons
      </Typography>
      <SearchBarInput
        label="Chercher un pokemon"
        onChange={(value: string) => run(value)}
      />
      <Grid container spacing={2} sx={{ marginLeft: 10 }}>
        {isFetching ? (
          <FetchingPokemonListSkeleton />
        ) : (
          <PokemonList pokemons={pokemons} />
        )}
      </Grid>
      <Fab sx={fabStyle} color="primary" onClick={() => navigate("/add")}>
        {<AddIcon />}
      </Fab>
    </Container>
  );
};

export default withAuthGuard(HomePage);
