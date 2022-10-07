import React from "react";
import { Container, Typography } from "@mui/material";
import PokemonFormCards from "../../components/cards/PokemonFormCards";
import { usePostPokemonsMutation } from "../../app/services/api/pokemonApi";
import { useNavigate } from "react-router-dom";

const AddPokemonPage: React.FC = () => {
  const [postPokemon] = usePostPokemonsMutation();
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h1" textAlign={"center"}>
        Ajout pokémon
      </Typography>
      <PokemonFormCards
        submit={async (name, picture, hp, cp, types) => {
          await postPokemon({
            name,
            picture,
            hp,
            cp,
            types,
            created: new Date(),
          }).unwrap();
          navigate("/");
        }}
      />
    </Container>
  );
};

export default AddPokemonPage;
